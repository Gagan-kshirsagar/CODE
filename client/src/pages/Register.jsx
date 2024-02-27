import React from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow } from '../components'
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import customFetch from '../utils/customFetch.js'
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Register = () => {

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />

        <h4>Register</h4>

        <FormRow type='text' name='name' labelText='first name' defaultValue='name' />

        <FormRow type='text' name='lastName' labelText='last name' defaultValue='last name' />

        <FormRow type='text' name='location' labelText='location' defaultValue='location' />

        <FormRow type='email' name='email' labelText='email' defaultValue='email' />

        <FormRow type='password' name='password' labelText='password' defaultValue='password' />

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting' : 'submit'}
        </button>
        <p>Already a member ? <Link to='/login' className='member-btn'>Login</Link></p>
      </Form>
    </Wrapper>
  )
}

export default Register
