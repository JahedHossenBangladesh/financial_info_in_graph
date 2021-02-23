import React from 'react';
import {
  Link
} from "react-router-dom";

const Login = () => {



function storeData(){
const name = document.getElementById('fname').value;
const password = document.getElementById('pwd').value;
 localStorage.setItem("Name", name);
 localStorage.setItem("Password",password)
}

    return (

         <><div class="container" style={{paddingLeft:"500px",paddingTop:"200px"}}>
         <div class="info"> <h5 style={{color:"red"}}>Type name John  and password 12345 will show column chart and MICKY , 98765  will show pie chart</h5></div>
<form class="form-inline" action="/action_page.php">
  <label for="fname"> <h5>Your Name</h5> </label>
 <input type="text" class="form-control" placeholder="Enter Your Name" id="fname"  />
  <br/>
  <label for="pwd"><h5>Password</h5></label>
  <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  <br/>
  <br/>
<Link to="/chart"><button type="submit" class="btn btn-primary"   onClick={() => storeData()}  >Submit</button></Link>  
</form>
         
    
</div>
    </>
    );
};

export default Login;