import React from "react";
import { Button } from "semantic-ui-react";

function StaticButtons() {
  return (
    <div>
      <div class="ui secondary  menu">
        <div>File or Dial</div>
        <a class="active item" href="/pcb">Physician Comm Binder</a>
        <a class="item">Physician Contact Numbers</a>
        <a class="item">Return to unit-specific patients list</a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              {/* <input type="text" placeholder="Search..."> */}
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">Logout</a>
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
