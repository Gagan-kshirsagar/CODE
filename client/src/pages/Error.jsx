import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'
const Error = () => {
  const error = useRouteError()
  if(error.status === 404){

    return <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! page not found</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum vitae cum amet et suscipit explicabo at nesciunt pariatur. Praesentium, cupiditate? Provident qui vel, dolore libero nulla laborum labore aut fuga.</p>
        <Link to="/dashboard">Home</Link>
      </div>
    </Wrapper>
  }
  return (
    <div>
      <h4>Something went wrong</h4>
    </div>
  )
}

export default Error
