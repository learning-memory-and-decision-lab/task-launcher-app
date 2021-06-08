import React from 'react'

const TaskBox = ({ name, logo, link}) => {
    return (
      <a href={link} target="_blank" rel="noreferrer" className='box has-background-grey m-6'>
        <figure className='image is 128x128 is-flex is-justify-content-center'>
          <img src={logo} alt={name}/>
        </figure>
        <p className='content is-size-4 has-text-white is-flex is-justify-content-center'>{name}</p>
      </a>
    )
  }
  
  export default TaskBox