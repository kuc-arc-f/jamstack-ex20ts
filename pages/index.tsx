import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout'

export default function Index(props) {
//console.log(props.site_name)
  return (
  <div className="body_wrap d-flex text-center text-white bg-secondary">
    <Head>
      <title>{props.site_name}</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous" />      
      <link href="/css/cover.css" rel="stylesheet"></link>
    </Head>    
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0"></h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
            <a className="nav-link active" href="/about">About</a>
            <a className="nav-link active" href="/license">License</a>
          </nav>
        </div>
      </header>
      <main className="px-3">
        <h1>{props.site_name}</h1>
        <p className="lead">
          { props.site_info}
        </p>
        <p className="lead">
          <a href="/home" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
        </p>
      </main> 
      <footer className="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">
          Bootstrap 5</a></p>
      </footer>           
    </div>
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
      body {
        text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
        box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
      }      
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }      
    `}</style>    
  </div>
  )
}

export async function getStaticProps() {
  return {
    props : {
      blogs: [],
      site_name : process.env.MY_SITE_NAME,
      site_info : "Next.js + Bootstrap 5 , json file read sample",
    }
  };
}
