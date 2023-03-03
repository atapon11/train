import React, { Fragment, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { TextSelect } from "../../../../components/TextSelect";
import PrefixDoctor from "../../../../data/prefixDoctor.json";
import { getTreatmentTypeAll } from "../../../../service/TreatmentType.Service";
import Schema from "./Validation";

function FormDoctor() {
  const location = useLocation();

  console.log(location);

  const [dataTreatment, setDataTreatment] = useState([]);

  useEffect(() => {
    getTreatmentAll();
  }, []);

  async function getTreatmentAll() {
    let res = await getTreatmentTypeAll();
    if (res) {
      if (res.statusCode === 200 && res.taskStatus) {
        setDataTreatment(res.data);
      }
    }
  }

  return (
    <Fragment>
      <div className="w-full">
        <div className="d-flex justify-content-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="#" className="nav-breadcrumb">
                  ข้อมูลรายชื่อแพทย์
                </Link>
              </li>
              <li
                className="breadcrumb-item text-black fw-semibold"
                aria-current="page"
              >
                ข้อมูลรายชื่อแพทย์
              </li>
            </ol>
          </nav>
        </div>
        <div className="w-full mb-5">
          <h2 className="title-content">ข้อมูลรายชื่อแพทย์</h2>
        </div>

        <Formik
          enableReinitialize={true}
          validationSchema={Schema}
          initialValues={{
            prefixId: "",
            name: "",
            lastname: "",
            treatment: "",
          }}
          onSubmit={(value) => {}}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="col-12 px-1 mt-2">
                      <label>คำนำหน้า</label>
                      <TextSelect
                        id="prefixId"
                        name="prefixId"
                        options={PrefixDoctor}
                        value={PrefixDoctor.filter(
                          (a) => a.id === values.prefixId
                        )}
                        onChange={(item) => {
                          setFieldValue("prefixId", item.id);
                        }}
                        getOptionLabel={(z) => z.name}
                        getOptionValue={(x) => x.id}
                      />
                    </div>
                    <div className="col-12 px-1 mt-2">
                      <label>ชื่อ</label>
                      <input
                        name="name"
                        type="text"
                        value={values.name}
                        className={`form-input ${touched.name ? (errors.name ? 'invalid' : 'valid') : ''}`}
                        onChange={(e) => {
                          setFieldValue("name", e.target.value);
                        }}
                      />
                      <ErrorMessage component="div" name="name" className="text-invalid" />
                    </div>
                    <div className="col-12 px-1 mt-2">
                      <label>นามสกุล</label>
                      <input
                        name="lastname"
                        type="text"
                        value={values.lastname}
                        className={`form-input ${touched.lastname ? (errors.lastname ? 'invalid' : 'valid') : ''}`}
                        onChange={(e) => {
                          setFieldValue("lastname", e.target.value);
                        }}
                      />
                      <ErrorMessage component="div" name="lastname" className="text-invalid" />
                    </div>
                    <div className="col-12 px-1 mt-2">
                      <label>ประเภทการรักษา</label>
                      <TextSelect
                        id="treatment"
                        name="treatment"
                        options={dataTreatment}
                        value={dataTreatment.filter(
                          (a) => a.id === values.treatment
                        )}
                        onChange={(item) => {
                          setFieldValue("treatment", item.id);
                        }}
                        getOptionLabel={(z) => z.name}
                        getOptionValue={(x) => x.id}
                      />
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                      <button type="submit" className="btn btn-success mx-1">
                        <i className="fa-solid fa-magnifying-glass mx-1"></i>
                        บันทึก
                      </button>
                      <button type="reset" className="btn btn-secondary mx-1">
                        <i className="fa-solid fa-rotate-left mx-1"></i>
                        ล้างค่า
                      </button>
                    </div>
                  </div>
                  <div className="w-full mt-5">{/* <ShowData /> */}</div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default FormDoctor;
