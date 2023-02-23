import React from "react";
import { Formik, Form } from "formik";
import ShowData from "./ShowData";

function MainStudent() {
  return (
    <div className="col-12">
      <Formik
        initialValues={{
          email: "enricomk01@gmail.com",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log();
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>ค้นหา</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>คณะ</label>
                <select className="form-control form-select">
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>สาขา</label>
                <select className="form-control form-select">
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div>
              <ShowData />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default MainStudent;
