import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";

function App() {
  const [runNumber, setRunNumber] = useState(0);

  useEffect(() => {
    //เข้าฟังชั่น auto เมื่อเปิดหน้า
    if (runNumber <= 10) {
    setTimeout(() => {
      let num = runNumber;
    num += 1;
    setRunNumber(num);
      }, 1000);
   } else if (runNumber >= 10) {
       alert('Time Out');
    }
  }, [runNumber]);

  function plus() {
    let num = runNumber;
    num += 1;
    setRunNumber(num);
  }

  function minus() {
    let num = runNumber;
    num -= 1;
    setRunNumber(num);
  }

  return (
    <div className={'mt-5 fs-1 ' + (runNumber >=10 ? 'bg-success' : '')}>
     {runNumber >=10 ?  <p className="text-center">Time Out</p> : null}
      <p className="text-center">{runNumber}</p>
      <ShowData number={runNumber} name="โตเอิท" />
      <div className="row clo-12 d-flex justify-content-center text-center">
        <div className="col-6">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              plus();
            }}
          >
            Plus
          </button>
        </div>
        <div className="col-6 ">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              minus();
            }}
          >
            minus
          </button>
        </div>
      </div>
      <ShowData number={runNumber}/>
    </div>
  );
}

export default App;
