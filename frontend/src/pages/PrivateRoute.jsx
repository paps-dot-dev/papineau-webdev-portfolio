import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({ loggedIn }) {
  return loggedIn ? (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  ) : (
    <Navigate to={'/'} />
  )
}

export default PrivateRoute
