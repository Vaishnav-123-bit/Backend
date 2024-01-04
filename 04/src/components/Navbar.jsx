import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (props) => {
  return (
    <div className="flex justify-center items-center">
        <div className="p-0 w-1/5 bg-gray-400">{props.title}</div>
        <div className="mx-5 w-3/5 flex justify-evenly items-center ">
            <h4>home</h4>
            <h4>home</h4>
            <h4>home</h4>

        </div>
    </div>
  )
}

export default Navbar

Navbar.protoTypes={
    title:PropTypes.string,
}