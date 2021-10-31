import React from 'react'
//import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/layout'
import IndexRow from './IndexRow';
import LibCommon from '../../libs/LibCommon'
import LibCms from '../../libs/LibCms'
//
function Page(data) {
  const items = data.blogs
  const category_name = data.category_name
//console.log("display=", data.display)  
  return (
    <Layout>
      <Head><title key="title">{category_name} | {data.site_name}</title>
      </Head> 
      <div className="body_main_wrap ">
        <div className="container container_wrap">
          <Link href="/home" >
            <a className="btn btn-outline-dark mt-2">Back</a>
          </Link>          
          <div className="body_wrap">
            <div id="post_items_box" className="row conte mt-2 mb-4">
              <div className="col-sm-12">
                <div id="div_news">
                  <h2 className="myblog_color_accent mt-2 mb-2">Category : {category_name}
                  </h2>
                </div>
                <hr />
              </div>
              {items.map((item, index) => {
// console.log(item )
                return (<IndexRow key={index}
                  id={item.save_id} title={item.title}
                  date={item.created_at} />       
                )
              })}
            </div>
            <br /><br />
          </div>          
        </div>
      </div>
      <style>{`
      .container_wrap{ background: #FFF;}
      `}</style>       
    </Layout>
    )  
}
//
export const getStaticProps = async context => {
  const id = context.params.id;
console.log("id=", id )
  const dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  const url = process.env.MY_JSON_URL+ '?' + dt
  const req = await fetch( url );
  const json = await req.json();  
  let items = json.items 
  items =  LibCommon.get_reverse_items(items)
  items = LibCms.get_category_items(items, id)
  const category = LibCms.get_category_item(json.category_items, id)
//console.log(category)
  return {
    props : {
      blogs: items, display: 0, 
      site_name : process.env.MY_SITE_NAME,
      category_name: category.name,
    }
  };
}
//
export const getStaticPaths = async () => {
  const dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  const url = process.env.MY_JSON_URL+ '?' + dt
  const req = await fetch( url );
  const json = await req.json();  
  let items = json.category_items     
  const paths = []
  items.map((item, index) => {
    let row = { params: 
      { id: item.save_id } 
    }
    paths.push(row)
  })
//console.log(paths)
  return {
    paths: paths,
    fallback: false
  } 
};

export default Page
