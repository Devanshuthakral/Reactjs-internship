import React from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router';
const About = () => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params,'---params---')
  return (
    <div>
      This is about pages
      <button onClick={()=>navigate("/")}>Home</button>
      
    </div>
  )
}

export default About
