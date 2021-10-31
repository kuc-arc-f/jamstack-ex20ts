import Link from 'next/link';
import Head from 'next/head';
//
function Page(props) {
// console.log( "s=", props.site_name )
  const site_name = props.site_name
  const info_text = props.info_text
  return (
  <div className="main_title_wrap myblog_bgcolor_sub">
    <div id="div_img_layer">
      <h1>{site_name}
      <br />
      </h1>
      <p className="sub_title mt-2">{info_text}
        <br />
      </p>
    </div>
  </div>
  );
}
export default Page
