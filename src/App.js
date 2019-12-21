import React from 'react'
import './App.css'
import Search from './components/views/Search';
import Home from './components/views/Home';
import { Switch, Route } from 'react-router-dom';
import Provider, { MyContext } from './Provider/'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route exact path="/" render={()=>(
              <MyContext.Consumer>
                {context=><Home {...context}/>}
              </MyContext.Consumer>
            )}/>
            <Route exact path="/search" render={()=>(
              <MyContext.Consumer>
                {context=><Search {...context}/>}
              </MyContext.Consumer>
            )}/>
          </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp;
