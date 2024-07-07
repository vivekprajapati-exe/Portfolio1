import React from 'react'

function ErrorPage(err) {
  return (
    <div className='flex justify-center items-center p-2 bg-gray-800'>
      <h1>We are facing some issue </h1>
      <p><b>The issue is :</b>{err}</p>
    </div>
  )
}

export default ErrorPage
