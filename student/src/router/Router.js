import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import MainStudent from "../view/student/MainStudent";
import MainHome from "../view/home/MainHome";
import MainTest from "../test/MainTest";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/student" element={<MainStudent />} />
          <Route path="/test" element={<MainTest />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
