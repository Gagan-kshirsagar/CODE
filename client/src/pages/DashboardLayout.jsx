import React, { createContext, useContext, useState } from 'react'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, SmallSidebar, Navbar } from '../components'
import { checkDarkTheme } from '../App'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export const loader = async () => {

  try {
    const { data } = await customFetch.get('/users/current-user')
    return data
  } catch (error) {
    return redirect('/')
  }
}

const dashboardContext = createContext()

const DashboardLayout = () => {

  // const user = { name: "Jay" }

  const {user} = useLoaderData()
  const navigate = useNavigate()
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setDarkTheme] = useState(checkDarkTheme());

  const toggleDarkTheme = () => {

    const newDarkTheme = !isDarkTheme

    setDarkTheme(newDarkTheme);

    document.body.classList.toggle('dark-theme', newDarkTheme);

    localStorage.setItem('darkTheme', newDarkTheme);
  }

  const toggleSidebar = () => {

    console.log(showSidebar)
    setShowSidebar(!showSidebar);
  }

  const logoutUser = async() => {
    await customFetch.get('/auth/logout');
    toast.success('Logging out...');
    navigate('/');
  }

  return (
    <dashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </dashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(dashboardContext);

export default DashboardLayout
