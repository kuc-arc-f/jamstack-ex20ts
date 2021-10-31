import Link from 'next/link';
import Head from 'next/head';
//
export default function Page(props){
//  console.log(props.site_name)
//  var site_name = props.site_name
  return (
  <div id="div_navigate_index" className="myblog_bgcolor_main">
    <div id="div_head" className="cover">
      <div className="container">
          <div className="row">
              <div className="col-sm-6 p-2">
              <Link href="/" >
                <a><h3>Jamstack-ex20</h3></a>
              </Link>
              </div>
              <div className="col-sm-6 text-center">
                <Link href="/home" >
                  <a className="home_link"><p>
                  <i className="bi bi-house-fill mx-2"></i>
                  </p></a>
                </Link>                      
              </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export async function getStaticProps() {
  return {
    props : {
      site_name : process.env.MY_SITE_NAME,
    }
  };
}