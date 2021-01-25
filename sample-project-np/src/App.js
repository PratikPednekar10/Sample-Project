import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
//import SignUp from './components/pages/SignUp';
import SignUpAuth from './components/auth/SignUpAuth';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import { Provider, Context } from './context/authContext';
import SignUp from './components/auth/SignUpAuth';

function App() {
  const { signUp } = useContext(Context)
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route exact path="/sign-up-Auth" render={() => (<SignUp signUp={async (user) => {
            await signUp(user);
          }} />)
        } />
      </Switch>
    </Router>
  );
}
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};