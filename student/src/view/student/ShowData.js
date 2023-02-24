import React from "react";
import Pagination from "react-js-pagination";

function ShowData({ data, pagin, changePage, changePageSize }) {
  console.log("data", data);
  console.log("pagin", pagin);
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <div>
          <select
            value={pagin.pagesize}
            className="form-control form-select"
            onChange={(e) => {
              changePageSize(parseInt(e.target.value));
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>50</option>
            <option value={40}>100</option>
          </select>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              console.log();
            }}
          >
            เพิ่ม
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ลำดับที่</th>
            <th scope="col">ชื่อ-นามสกุล</th>
            <th scope="col">คณะ</th>
            <th scope="col">สาขา</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">
                {(pagin.currentpage - 1) * pagin.pagesize + (index + 1)}
              </th>
              <td>{item.name + "" + item.lastname}</td>
              <td>{item.faculty}</td>
              <td>{item.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <div>จำนวน {pagin.totalrow} รายการ</div>
        <div>
          <Pagination
            activePage={pagin.currentpage}
            itemsCountPerPage={pagin.pagesize}
            totalItemsCount={pagin.totalrow}
            pageRangeDisplayed={pagin.totalpage}
            onChange={(page) => {
              changePage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowData;
