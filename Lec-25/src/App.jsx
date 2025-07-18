// import React from 'react'
// import {Routes, Route} from "react-router";
// import Home from './pages/Home';
// import About from './pages/About';
// import Contacts from './pages/Contacts';
// import NotFound from './pages/NotFound';
// import Navbar from './Components/Navbar';
// import { useNavigate } from 'react-router';
// const App = () => {
//   return (
//     <div>
//       <Navbar/> 
//       <Routes>
//         <Route path="/" element = {<Home/>} />
//         <Route path = "/about/:id" element={<About />} /> 
//         <Route path = "/contacts" element={<Contacts />} />
//         <Route path = "*" element={<NotFound />} /> 

      
//       </Routes>

      
//     </div>
//   );
// };

// export default App


import React from 'react'
import {Routes, Route} from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
// import { ThemeProvider } from './context/ThemeContext'
import { useTheme } from './store/UseTheme';
const App = () => {
  // const [darkTheme,setTheme] = React.useState(true);
  // const setDarkTheme = () => {
  //   setTheme((prev) => !prev)   // th
  // }
  const {darkTheme} = useTheme();
  return (
    <div>
      {/* <ThemeProvider value={{darkTheme,setDarkTheme}}> */}
        <div className = {`h-screen ${darkTheme ? "bg-slate-950 text-white" : "bg-yellow-100 text-black"}`}> 
         <Routes>
     <Route path="/" element = {<Home/>} />
       <Route path = "/about/:id" element={<About />} /> 
        <Route path = "/contacts" element={<Contacts />} />
        <Route path = "*" element={<NotFound />} /> 

      
      </Routes>
      </div>
      {/* </ThemeProvider> */}
    </div>
  )
}

export default App
