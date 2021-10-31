import Link from 'next/link';
import Head from 'next/head';
//
export default function Page(props){
//  console.log(props)
const paginateDisp = props.paginateDisp
  const nextPage = parseInt(props.page) + 1
  return (
  <div>
    { paginateDisp ? (
    <div className="paginate_wrap text-center">
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link href="/page/1"><a className="btn btn-lg btn-outline-dark">
          1st</a></Link>
          <Link href={`/page/${nextPage}`}><a className="btn btn-lg btn-outline-dark">
          next </a></Link>
      </div>
    </div>
    ):"" 
    }    
  </div>
  );
}
