import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Login from './components/login/Login';
import NotFound from './components/NotFound/NotFound';
import Chart from './components/Chart/Chart';



function App() {
  return (
    <>
      <Router>
<Switch>
  <Route exact path="/">
<Login/>
  </Route>
  <Route path="/login">
<Login/>
  </Route>
   <Route path="/chart">
<Chart/>
   </Route>


  <Route component={NotFound} />
</Switch>


      </Router>
    
      
      
    
    </>
  );
  
}

export default App;
