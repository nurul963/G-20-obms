import React from 'react'

const About = ({person}) => {
    console.log(person);
  return (
    <div>
        <h3>Name:{person.name}</h3>
        <p>Salary:{person.salary}</p>
    </div>
  )
}

export default About