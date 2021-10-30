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
import Footer from './Components/Footer/Footer';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import BookNow from './Components/BookNow/BookNow';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


initializeApp(firebaseConfig);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header > </Header>

        <Switch>
          <Route path='/' exact >
            <Home></Home>
          </Route>

          <PrivateRoute path='/dashboard' exact >
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path='/bookpackage/:id' >
            <BookNow></BookNow>
          </PrivateRoute>

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

        <Footer></Footer>

      </Router>
    </AuthProvider>
  );
}

export default App;
