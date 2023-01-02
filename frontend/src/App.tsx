import React, { useState, useEffect } from 'react'
import './style.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import * as ROUTES from './routes'
import { useTranslation } from 'react-i18next'
import Environment from 'components/Environment'
import { HEARTBEAT } from './api'

const Example = ({
}) => {
  const { t } = useTranslation()

  useEffect(() => {
    fetch(HEARTBEAT)
  })

  return (
    <Environment />
  )
}

const App: React.FC = () => {
  // Depends of your implementation of authentication
  const isLoggedIn = false

  return (
    <Router>
      {!isLoggedIn &&
        <Switch>
          <>
            <Redirect from={'*'} to={ROUTES.ROOT} />
            <Route path={ROUTES.ROOT}>
              <Example />
            </Route>
          </>
        </Switch>
      }
      {isLoggedIn &&
        <div>
          {/* <AuthenticatedSwitch /> */}
        </div>
      }
    </Router>
  )
}

export default App
