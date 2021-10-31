import Head from 'next/head';
import Navibar from './Navibar';
//import Footer from './Footer';
//
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title key="title">NextJs App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />        
        <link href="/css/main.css" rel="stylesheet"></link>
        <link href="/css/bgcolor-gray.css" rel="stylesheet"></link>
        <link href="/css/components/buttons.css" rel="stylesheet"></link>
      </Head>
      <Navibar />
      {children}
      <br />
    </div>
  )
}

export default Layout
