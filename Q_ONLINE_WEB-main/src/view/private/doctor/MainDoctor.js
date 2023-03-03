import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import ShowData from "./ShowData";
import { TextSelect } from "../../../components/TextSelect";
import Status from "../../../data/status.json";
import { getTreatmentTypeAll } from "../../../service/TreatmentType.Service";

const MainDoctor = () => {
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
  console.log(dataTreatment);
  return (
    <Fragment>
      <div className="w-full">
        <div className="d-flex justify-content-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {/* <li className="breadcrumb-item">
                <Link to="#" className="nav-breadcrumb">
                  ข้อมูลแพทย์
                </Link>
              </li> */}
              <li
                className="breadcrumb-item text-black fw-semibold"
                aria-current="page"
              >
                เพิ่มข้อมูลแพทย์
              </li>
            </ol>
          </nav>
        </div>
        <div className="w-full mb-5">
          <h2 className="title-content">ข้อมูลแพทย์</h2>
        </div>
        <Formik
          enableReinitialize={true}
          // validationSchema={Schema}
          initialValues={{
            search: "",
            status: "",
          }}
          onSubmit={(value) => {
            console.log("submit :", value);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <label>ค้นหา</label>
                  <input
                    value={values.search}
                    type="text"
                    className="form-input"
                    onChange={(e) => {
                      setFieldValue("search", e.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <label>ประเภทการรักษา</label>
                  <TextSelect
                    id="treatment"
                    name="treatment"
                    options={dataTreatment}
                    value={[]}
                    onChange={(item) => {
                      console.log(item);
                    }}
                    getOptionLabel={(z) => z.name}
                    getOptionValue={(x) => x.value}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <label>สถานะการใช้งาน</label>
                  <TextSelect
                    id="pagesize"
                    name="pagesize"
                    options={Status}
                    value={Status.filter((a) => a.value === values.status)}
                    onChange={(item) => {
                      setFieldValue("status", item.value);
                    }}
                    getOptionLabel={(z) => z.label}
                    getOptionValue={(x) => x.value}
                  />
                </div>
                <div className="col-12 col-lg-4 pt-4">
                  <button type="submit" className="btn btn-success mx-1">
                    <i className="fa-solid fa-magnifying-glass mx-1"></i>
                    ค้นหา
                  </button>
                  <button
                    type="reset"
                    className="btn btn-secondary mx-1"
                    onClick={() => {}}
                  >
                    <i className="fa-solid fa-rotate-left mx-1"></i>
                    ล้างค่า
                  </button>
                </div>
              </div>
              <div className="w-full mt-5">{<ShowData />}</div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default MainDoctor;
