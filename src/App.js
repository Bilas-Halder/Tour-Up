import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/firebase_config';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookNow from './Components/BookNow/BookNow';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import AddPackage from './Components/AddPackage/AddPackage';


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

          <PrivateRoute path={['/dashboard/', '/dashboard/myorders']} exact >
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute path='/dashboard/manageorders' exact >
            <ManageOrders></ManageOrders>
          </PrivateRoute>

          <PrivateRoute path='/dashboard/addpackage' exact >
            <AddPackage></AddPackage>
          </PrivateRoute>

          <PrivateRoute path='/bookpackage/:id' >
            <BookNow></BookNow>
          </PrivateRoute>

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
