import Link from 'next/link';

const PagesRow = props => (
  <span>
      <Link href={`/category/${props.id}`} >
        <a className="btn btn-outline-dark mx-1 mb-2">
        {props.name}
        </a>
      </Link>        
  </span>
);
export default PagesRow;
