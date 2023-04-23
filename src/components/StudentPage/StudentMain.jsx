import React from "react";
import "./StudentMain.css";
const StudentMain = () => {
  // left side image of student
  // right side student resume
  // edit profile option
  return (
    <div className="studentmain-container marginleft">
      <div>
        <h3>Student Profile</h3>
        <div className="studentmain-profile">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="Student Image"
            className="studentmain-profile__img"
          />
          <hr />
          <div className="studentmain-contact">
            <div>
              <h4>Email Address</h4>
              <p>abc@gmail.com</p>
            </div>
            <div>
              <h4>Contact Number</h4>
              <p>1234567890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="student-form">
        <h3>Profile Details</h3>
        <div className="studentmain-profiledetails">
          <div className="studentmain-profiledetails__details">
            <div className="studentmain-form-content">
              <div className="studentmain-form-values">
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" readOnly />
              </div>
              <div className="studentmain-form-values">
                <label>PRN</label>
                <input type="text" placeholder="Enter Your PRN" readOnly />
              </div>
            </div>
            <div className="studentmain-form-content">
              <div className="studentmain-form-values">
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="studentmain-form-values">
                <label>Branch</label>
                <input type="text" placeholder="Enter Your Branch" readOnly />
              </div>
            </div>
            <div className="studentmain-form-content">
              <div className="studentmain-form-values">
                <label>City</label>
                <input type="text" placeholder="Enter Your City" />
              </div>
              <div className="studentmain-form-values">
                <label>State</label>
                <input type="text" placeholder="Enter Your State" />
              </div>
            </div>
            <div className="studentmain-form-content">
              <div className="studentmain-form-values">
                <label>Mobile No.</label>
                <input type="text" placeholder="Enter Your Mobile No." />
              </div>
              <div className="studentmain-form-values">
                <label>CGPA</label>
                <input type="text" placeholder="Enter Your CGPA" />
              </div>
            </div>
            <div className="studentmain-form-content">
              <div className="studentmain-form-values">
                <label>10th Score</label>
                <input type="text" placeholder="Enter Your 10th Score" />
              </div>
              <div className="studentmain-form-values">
                <label>12th Score</label>
                <input type="text" placeholder="Enter Your 12th Score" />
              </div>
            </div>
            <div className="studentmain-form-content address-field">
              <div className="studentmain-form-values">
                <label>Address</label>
                <input type="text" placeholder="Enter Your Address" />
              </div>
            </div>
          </div>
          <div className="studentmain-form-content">
            <button>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMain;
