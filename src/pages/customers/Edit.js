import { useState, useEffetc, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(2)
  }
}))

const Edit = () => {
  const classes = useStyles()
  const { id } = useParams()


  const [form, setForm] = useState({
    name: {
        value: '',
        error: false,
      },
      job: {
        value: '',
        error: false,
    }, 
  })

  const [openToasty, setOpenToasty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
        .then(response => {
            const { data } = response.data

            setForm({
                name: {
                    value: data.first_name,
                    error: false,
                  },
                  job: {
                    value: data.job,
                    error: false,
                }, 
            })
        })
    }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: {
        value,
      }  
    })
  }

  const handleRegisterButton = () => {
    setIsLoading(true)

    let hasError = false
    let newFormState = {
      ...form,
    }
    if(!form.name.value) {
      hasError = true

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo corretamente'
      }
    }

    if(!form.job.value) {
      hasError = true
      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo corretamente'
      }
    }

    if(hasError) {
      return setForm(newFormState)
    }

    axios.put(`https://reqres.in/api/users/${id}`, {
      name: form.name.value,
      job: form.job.value,
    }).then((response) => {
        setOpenToasty(true)
        setIsLoading(false)
      })
  }

  return (
    <>
      <div className={classes.wrapper}>
        <TextField
        helperText={form.name.error ? form.name.helperText : ''}
        error={form.name.error}
        id="outlined-basic"
        label="Digite o seu nome"
        name="name"
        variant="outlined" 
        value={form.name.value}
        onChange={handleInputChange} />
      </div>  
      <div className={classes.wrapper}>
        <TextField
        helperText={form.job.error ? form.job.helperText : ''}
        error={form.job.error}
        id="outlined-basic"
        label="Digite o seu trabalho"
        name="job"
        variant="outlined"
        value={form.job.value}
        onChange={handleInputChange} />
      </div>
      <div className={classes.wrapper}>
        <Button variant="contained" color="primary" onClick={handleRegisterButton}>
          {
            isLoading ? 'Aguarde ...' :  'Salvar'
          }
        </Button>
      </div>
      <Toasty
        open={openToasty}
        severity="success"
        text="Alterações realizadas com sucesso!"
        onClose={() => setOpenToasty(false)}
      />
    </>
  )
}

export default Edit