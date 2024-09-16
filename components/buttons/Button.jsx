import './button.scss'
export default function Button({ linkTo }) {
  return (
    <a href={linkTo} className="btn btn--white btn--animated">
      Discover our tours
    </a>
  )
}
