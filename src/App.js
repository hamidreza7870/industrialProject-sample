import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import NotFound from './components/404/NotFound';
import './assets/Font/iranyekan/WebFonts/css/style.css';
import theme from "./theme/theme"
import { ThemeProvider, StylesProvider, jssPreset } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import { create } from "jss"
import rtl from "jss-rtl"

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss} >
          <CssBaseline />
          <div className="App">
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/services/' component={Services} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/Projects' component={Projects} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </StylesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
