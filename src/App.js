import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import CustomersEdit from './pages/customers/Edit'
import CustomersRegister from './pages/customers/Register'
import CustomersList from './pages/customers/List'
import Home from './pages/Home'

const App = () => {
 return (
   <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/edit/:id">
            <TemplatePage title="Alteração Dados Cliente" Component={CustomersEdit} />
          </Route>
          <Route path="/customers/add">
            <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Lista de Clientes" Component={CustomersList} />
          </Route>
          <Route path="/">
            <TemplatePage title="Home" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  )
}

export default App
