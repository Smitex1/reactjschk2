import React from 'react'

const FullName = () => {
  const person = {
    lastName: "SMITH",
    firstName: "PRAISE"
    
  }
  return (
    <div>

      <h4 style={{color:"white"}}> {person.lastName} {person.firstName}</h4>


    </div>
  )
}

export default FullName