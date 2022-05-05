import React from 'react'

function index() {
  return (
    <div>index</div>
  )
}

index.getInitialProps = async (context) => { 
    console.log('hello world 2', context)
  
    return 'test'
  }
  

export default index