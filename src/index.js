import "./global.css"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { Chat } from "./pages"
import { store, Profile } from "./components"
import Counter from "./components/counter/counter"

const theme = createMuiTheme({})

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Switch>
          <Route path="/chat" component={(props) => <Chat {...props} />} />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route exact path="/" component={() =>
            <div>
              <Link to="/chat" className="chats-room-link">Go To Chats Room</Link>
            </div>} />
        </Switch>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
  ,
  document.getElementById("root"),
)
