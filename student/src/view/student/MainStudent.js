import React from "react";
import { Formik,Form } from 'formik';

function MainStudent() {
  return <div className="col-12"> 
    <Formik
    initialValues={{
      email: 'enricomk01@gmail.com',
      password: '',
    }}
    onSubmit={(values, {setSubmitting}) =>{
      console.log();
    }}
    >
      {({ values, errors, touchhed, setFieldValue}) =>(
        <Form>
          <div className="row">
            <div className="col-12 col-md-4 px-1 mt-1">
            <label>ค้นหา</label>
              <input type="text"
              className="form-control"
              onChange={(e) => {
                console.log(e.target.value)
              }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 px-1 mt-1">
            <label>ค้นหา</label>
              <input type="text"
              className="form-control"
              onChange={(e) => {
                console.log(e.target.value)
              }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 px-1 mt-1">
            <label>ค้นหา</label>
              <input type="text"
              className="form-control"
              onChange={(e) => {
                console.log(e.target.value)
              }}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>;
}

export default MainStudent;
