import React, { Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';
import '../style/layout.css'

function Layout (props)  {
    console.log(props);
  return (
    <Fragment>
        <Header/>
    <div className="main-layout p-4">{props.children}</div>
        <Footer/>
    </Fragment>
  );
}

export default Layout