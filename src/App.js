import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/firebase_config';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Contexts/AuthProvider';


initializeApp(firebaseConfig);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header > </Header>
        <Switch>
          <Route path='/' exact >
            <Home></Home>
          </Route>
          <Route path="/aboutus" exact >
            <AboutUs></AboutUs>
          </Route>
          <Route path="/login" exact >
            <LogIn></LogIn>
          </Route>
          <Route path="/*" exact >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
