import React from "react";
import { Button } from "semantic-ui-react";
import logo from '../assets/logo2.png';
   /* height: 600px; */
import '../assets/logo.css'
function StaticButtons() {
  return (
    <div>
      <div class="ui secondary  menu" style={{backgroundColor: '#39cccc' }}>
        <img src={logo} alt="Logo"  href="/" style={{marginLeft: 20}}/>
        <a class="active item" href="/pcb" style={{color: "white"}}>Physician Comm Binder</a>
        <a class="item" style={{color: "white"}}>Physician Contact Numbers</a>
        <a class="item" href="/patienthomepage" style={{color: "white"}}>Return to unit-specific patients list</a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              {/* <input type="text" placeholder="Search..."> */}
              <i class="search link icon" style={{color: "white"}}></i>
            </div>
          </div>
          <a class="ui item" style={{color: "white"}} href="/">Logout</a>
        </div>
      </div>
      {/* <Button>Physician Communication Binder</Button>
      <Button>Physician and Alternative Communication Numbers</Button>
      <Button>Return to Unit-Specific Patients List</Button>
      <Button>LOGOUT</Button> */}
    </div>
  );
}

export default StaticButtons;
