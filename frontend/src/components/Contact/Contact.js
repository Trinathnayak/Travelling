import React, { Component } from "react";
import customer from "./customer.png";
import care2 from "./care2.png"
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container contactbg">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">
              {" "}
              <img src={care2}width="21%"></img>&nbsp;Contact Us
            </h1>
            <br></br>

            <h1>Director General's Office</h1>
            <br></br>
            <h5>
              {" "}
              <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Phone Number
              <br></br>
              <br></br>+91 9392765008 / +91 8143182169{" "}
            </h5>
            <br></br>
            <h5>
              {" "}
              <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email
              <br></br>
              <br></br>pbsc@India.travel{" "}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
