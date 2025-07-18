// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       THIS IS HOME PAGE
//     </div>
//   )
// }

// export default Home



import React from 'react'
// import { useTheme } from '../context/ThemeContext'
import { useTheme } from '../store/UseTheme';
const Home = () => {
    const {darkTheme,setDarkTheme} = useTheme();
    console.log(darkTheme,'==== dark theme ====')
  return (
    <div>
      <p>Home page</p>
      <button onClick={()=>setDarkTheme()}> Change Theme </button>
    </div>
  )
}

export default Home
