import { 
  AppBar, 
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import useStyles from './Header.style'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="menu" color="secondary">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Voit App
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>

  )
}

export default Header