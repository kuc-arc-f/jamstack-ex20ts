import React, {Component} from 'react';
import Layout from '../components/layout'
//
export default function Test(props) {
console.log(props);
  return (
  <Layout>
    <div className="container">
      <h1 className="mt-2">test</h1>
    </div>
  </Layout>
  )
}
export async function getStaticProps() {
  return {
    props : {
      blogs: [],
      site_name : process.env.MY_SITE_NAME,
    }
  };
}