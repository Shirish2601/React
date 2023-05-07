import React, { useState } from "react";
import Styles from "./CreateDrive.module.css";
const CreateDrive = () => {
  const [other, setOther] = useState(false);
  const [imgUploadOption, setImgUploadOption] = useState("");

  const imgUploadHandler = (e) => {
    console.log(e.target.value);
    setImgUploadOption(e.target.value);
  };

  const handleOther = (e) => {
    if (e.target.value === "other") {
      setOther(true);
    } else {
      setOther(false);
    }
  };
  return (
    <div className={`marginleft ${Styles["create-drive"]}`}>
      <h3>Create New Drive</h3>
      <form action="" className={`${Styles["create-drive__form"]}`}>
        <div>
          <h3>Company Details</h3>
          <p>Enter Company Details for new Drive</p>
        </div>
        <div className={`${Styles["form-container"]}`}>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["form-content"]}`}>
              <label>Company Name</label>
              <input type="text" placeholder="Enter Company Name" />
            </div>
            <div className={`${Styles["form-content"]}`}>
              <label>Company Website</label>
              <input type="text" placeholder="Enter Company Website Link" />
            </div>
          </div>
          <div
            className={`${Styles["create-drive__form__company-details"]} ${Styles["options"]}`}
          >
            <div className={`${Styles["form-content"]}`}>
              <label>Organisation Type</label>
              <select>
                <option value="">Select Organisation Type</option>
                <option value="Startup">Product Based</option>
                <option value="Product">Service Based</option>
                <option value="Service">Startup</option>
              </select>
            </div>
            <div className={`${Styles["other-options"]}`}>
              <div className={`${Styles["form-content"]}`}>
                <label>Industry Type</label>
                <select onChange={handleOther}>
                  <option value="">Select Industry Type</option>
                  <option value="">IT</option>
                  <option value="">Analytics</option>
                  <option value="">Core</option>
                  <option value="">Finance</option>
                  <option value="">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div
                className={`${Styles["form-content"]} ${
                  Styles[!other ? "inactive" : ""]
                } `}
              >
                <label>Enter industry type</label>
                <input type="text" placeholder="e.g: IT" />
              </div>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["create-drive__form__company-details"]}`}>
              <div className={`${Styles["form-content"]}`}>
                <label>About Company</label>
                <textarea
                  className={`${Styles["text-area"]}`}
                  placeholder="Enter About Company"
                  cols={70}
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["form-content"]}`}>
              <label>Company Logo</label>
              <select onChange={imgUploadHandler}>
                <option value="default">Select Company Logo</option>
                <option value="upload">Upload</option>
                <option value="link">Link</option>
              </select>
            </div>
            <div
              className={`${Styles["form-content"]}
              ${imgUploadOption === "default" ? Styles["inactive"] : ""}`}
            >
              <div
                className={`${
                  imgUploadOption === "upload" ? "" : Styles["inactive"]
                }`}
              >
                <div
                  className={
                    `${Styles["low-width-upload"]}` + ` ${Styles["upload-img"]}`
                  }
                >
                  <label>Upload Company Logo</label>
                  <input type="file" accept="image/*" />
                </div>
              </div>
              <div
                className={
                  `${imgUploadOption === "link" ? "" : Styles["inactive"]}` +
                  " " +
                  `${Styles["low-width"]}`
                }
              >
                <label>Enter Image Link</label>
                <input type="text" placeholder="Enter Image Link" />
              </div>
            </div>
          </div>
        </div>
      </form>
      <form action="" className={`${Styles["create-drive__form"]}`}>
        <div>
          <h3>Job Profile Details</h3>
          <p>Enter Job Details for new Drive</p>
        </div>
        <div className={`${Styles["form-container"]}`}>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["form-content"]}`}>
              <label>Job Profile</label>
              <input type="text" placeholder="Enter Job Profile" />
            </div>
            <div className={`${Styles["form-content"]}`}>
              <label>Passout Batch</label>
              <select>
                <option value="">Select Passout Batch</option>
                <option value="2021">2022</option>
                <option value="2022">2023</option>
                <option value="2022">2024</option>
              </select>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["form-content"]}`}>
              <label>Recruiting For?</label>
              <select>
                <option value="">Select Recruiting For</option>
                <option value="Internship">Internship</option>
                <option value="Full Time">Full Time</option>
              </select>
            </div>
            <div className={`${Styles["form-content"]}`}>
              <label>Tentative Date of Joining</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                placeholder="Enter Tentative Date of Joining"
              />
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["create-drive__form__company-details"]}`}>
              <div className={`${Styles["form-content"]}`}>
                <label>Job Description</label>
                <textarea
                  className={`${Styles["text-area"]}`}
                  placeholder="Enter Job Description"
                  cols={70}
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
      <form action="" className={`${Styles["create-drive__form"]}`}>
        <div>
          <h3>Student Eligibility Details</h3>
          <p>Enter Student Eligibility Details</p>
        </div>
        <div className={`${Styles["form-container"]}`}>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["form-content"]}`}>
              <label>Eligible Branches :</label>
              <div className={`${Styles["checkbox-style"]}`}>
                <div className={`${Styles["checkbox-style__content"]}`}>
                  <input type="checkbox" />
                  <label>Computer Science</label>
                </div>
                <div className={`${Styles["checkbox-style__content"]}`}>
                  <input type="checkbox" />
                  <label>Computer Science(AI)</label>
                </div>
                <div className={`${Styles["checkbox-style__content"]}`}>
                  <input type="checkbox" />
                  <label>Electronics and Telecommunication</label>
                </div>
                <div className={`${Styles["checkbox-style__content"]}`}>
                  <input type="checkbox" />
                  <label>Electrical</label>
                </div>
                <div className={`${Styles["checkbox-style__content"]}`}>
                  <input type="checkbox" />
                  <label>Mechanical</label>
                </div>
                <div className={`${Styles["checkbox-style__content"]}`}>
                  <input type="checkbox" />
                  <label>Civil</label>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div
              className={`${Styles["form-content"]} ${Styles["less-width"]}`}
            >
              <label>Minimum CGPA</label>
              <div className={`${Styles["newinput"]}`}>
                <input type="text" placeholder="Enter Minimum CGPA" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>CGPA</span>
                </div>
              </div>
            </div>
            <div
              className={`${Styles["form-content"]} ${Styles["less-width"]}`}
            >
              <label>Enter minimum 10th Percentage</label>
              <div className={`${Styles["newinput"]}`}>
                <input type="text" placeholder="Enter Minimum CGPA" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>10th%</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${Styles["create-drive__form__company-details"]} `}>
            <div
              className={`${Styles["form-content"]} ${Styles["less-width"]}`}
            >
              <label>Enter minimum 12th Percentage</label>
              <div className={`${Styles["newinput"]}`}>
                <input type="text" placeholder="Enter Minimum CGPA" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>12th%</span>
                </div>
              </div>
            </div>
            <div className={`${Styles["form-content"]} `}>
              <label>Enter minimum Diploma Percentage</label>
              <div className={`${Styles["newinput"]} ${Styles["less-width"]}`}>
                <input type="text" placeholder="Enter Diploma percentage" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>Diploma%</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]} `}>
            <div
              className={`${Styles["form-content"]} ${Styles["less-width"]}`}
            >
              <label>Enter minimum Backlogs</label>
              <div className={`${Styles["newinput"]}`}>
                <input type="text" placeholder="Enter Minimum Backlogs" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>Backlogs</span>
                </div>
              </div>
            </div>
            <div
              className={`${Styles["form-content"]} ${Styles["less-width"]}`}
            >
              <label>Enter minimum Live Backlogs</label>
              <div className={`${Styles["newinput"]}`}>
                <input type="text" placeholder="Enter Minimum Live Backlogs" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>Backlogs</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]} `}>
            <div
              className={`${Styles["form-content"]} ${Styles["less-width"]} `}
            >
              <label>Service Agreement?</label>
              <select>
                <option value="">Select Service Agreement</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      {/* package form */}
      <form action="" className={`${Styles["create-drive__form"]}`}>
        <div>
          <h3>Package Details</h3>
          <p>Enter Package Details</p>
        </div>
        <div className={`${Styles["form-container"]} `}>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["form-content"]}`}>
              <label>Package Offered</label>
              <div className={`${Styles["newinput"]} ${Styles["less-width"]}`}>
                <input type="text" placeholder="Enter Package Offered" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>LPA</span>
                </div>
              </div>
            </div>
            <div className={`${Styles["form-content"]}`}>
              <label>Allow Placed Students?</label>
              <select>
                <option value="">Select Allow Placed Students?</option>
                <option value="No">No</option>
                <option value="Higher Package">Only for Higher Package</option>
                <option value="Allow all">Allow All</option>
              </select>
            </div>
          </div>
        </div>

        {/*
        <div className={`${Styles["form-container"]} `}>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["form-content"]}`}>
              <label>Package Offered</label>
              <div className={`${Styles["newinput"]}`}>
                <input type="text" placeholder="Enter Package Offered" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>LPA</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </form>
      <form action="" className={`${Styles["create-drive__form"]}`}>
        <div>
          <h3>Selection Process</h3>
          <p>Enter Selection Process</p>
        </div>
        <div className={`${Styles["form-container"]} `}>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div
              className={`${Styles["form-content"]} ${Styles["new-options"]}`}
            >
              <label>Aptitude Test:</label>
              <select>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div
              className={`${Styles["form-content"]} ${Styles["new-options"]}`}
            >
              <label>Technical Test:</label>
              <select>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div
              className={`${Styles["form-content"]} ${Styles["new-options"]}`}
            >
              <label>Group Discussion:</label>
              <select>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div
              className={`${Styles["form-content"]} ${Styles["less-width"]}`}
            >
              <label>Number of Rounds:</label>
              <div className={`${Styles["newinput"]}  `}>
                <input type="text" placeholder="Enter Number of Rounds" />
                <div className={`${Styles["grey-box"]}`}>
                  <span>Rounds</span>
                </div>
              </div>
            </div>
            <div
              className={`${Styles["form-content"]} ${Styles["less-width"]}`}
            >
              <label>Date</label>
              <div className={`${Styles["newinput"]}  `}>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <form action="" className={`${Styles["create-drive__form"]}`}>
        <div>
          <h3>Registration Details</h3>
          <p>Enter Registration Details</p>
        </div>
        <div className={`${Styles["form-container"]} `}>
          <div className={`${Styles["create-drive__form__company-details"]}`}>
            <div className={`${Styles["form-content"]}`}>
              <label>Registration Start Date</label>
              <div className={`${Styles["newinput"]}  `}>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <button className={`${Styles["btn-create-drive"]}`}>
          <i className="fa-regular fa-square-check"></i>
          Create Drive
        </button>
      </div>
    </div>
  );
};

export default CreateDrive;
