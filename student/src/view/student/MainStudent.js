import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import ShowData from "./ShowData";
import {
  getStudent,
  getFaculty,
  getMajor,
} from "../../service/Student.service";

function MainStudent() {
  const [data, setData] = useState([]);
  const [dataFaculty, setDataFaculty] = useState([]);
  const [dataMajor, setDataMajor] = useState([]);
  const [pagin, setPagin] = useState({
    totalrow: 0,
    pagesize: 10,
    currentpage: 1,
    totalpage: 1,
  });

  useEffect(() => {
    get("", 0, 0, 10, 1);
    getFacultys();
    getMajors(0);
  }, []);

  function get(search, faculty, major, pagesize, currentpage) {
    let res = getStudent(search, faculty, major, pagesize, currentpage);
    setData(res.data);
    setPagin(res.pagin);
  }

  function getFacultys() {
    let res = getFaculty();
    setDataFaculty(res);
  }

  function getMajors(faculty) {
    let res = getMajor(faculty);
    setDataMajor(res);
  }

  return (
    <div className="col-12">
      <Formik
        initialValues={{
          search: "",
          faculty: 0,
          major: 0,
        }}
        onSubmit={(values) => {
          get(values.search, values.faculty, values.major);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>ค้นหา</label>
                <input
                  value={values.search}
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setFieldValue("search", e.target.value);
                  }}
                />
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>คณะ</label>

                <select
                  value={values.faculty}
                  className="form-control form-select"
                  onChange={(e) => {
                    getMajors(e.target.value);
                    setFieldValue("faculty", e.target.value);
                  }}
                >
                  <option value={0}>--เลือกคณะ--</option>
                  {dataFaculty.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.faculty}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>สาขา</label>
                <select
                  value={values.major}
                  className="form-control form-select"
                  onChange={(e) => {
                    setFieldValue("major", e.target.value);
                  }}
                >
                  <option value={0}>--เลือกสาขา--</option>
                  {dataMajor.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.major}
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary mx-1"
                  onClick={() => {}}
                >
                  ค้นหา
                </button>
                <button
                  type="reset"
                  className="btn btn-danger mx-1"
                  onClick={() => {
                    get("", 0, 0, 10, 1);
                    getMajors(0);
                  }}
                >
                  ล้างค่า
                </button>
              </div>
              <div></div>
              <ShowData
                data={data}
                pagin={pagin}
                changePage={(page) => {
                  console.log("page", page);
                  get(values.search, values.faculty, values.major, pagin.pagesize, page);
                }}
                changePaheSize={(pagesize) => {
                  console.log();
                  get(values.search, values.faculty, values.major, pagin.pagesize, 1);
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MainStudent;
