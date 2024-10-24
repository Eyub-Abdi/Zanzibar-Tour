import { Link } from 'react-router-dom'
export default function Button({ linkTo }) {
  return (
    <Link to={linkTo} className="btnx btnx--white btn--animated">
      Discover our tours
    </Link>
  )
}
