import './error.scss';

const ErrorPage = ({ messgae, code }) => {
  return (
    <div className='error'>
      <h1>{code || "Opps!"}</h1>
      <p>{messgae || 'Page not Found'}</p>
    </div>
  )
}

export default ErrorPage