import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage';
import main from "../assets/images/main.svg"
import { Link } from 'react-router-dom';
import { Logo } from '../components';

// const StyleBtn = styled.button`
//   font-size : 1.5rem;
//   background : red
// `
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>

      <div className='container page'>
        <div className='info'>
          <h1>job <span>tracking</span>app</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatem exercitationem sed accusamus quaerat voluptates molestias, consequatur est doloremque sequi voluptatibus necessitatibus non odit obcaecati! Voluptatem vitae doloribus suscipit nemo.</p>
          <Link to="/register" className='btn register-link'>Register</Link>
          <Link to="/login" className='btn'>Login</Link>
        </div>

        <img src={main} alt="job" className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
