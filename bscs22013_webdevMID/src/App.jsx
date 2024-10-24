// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import HeaderAndFooter from './assets/movie_components/HeaderAndFooter'
// // import './assets/movie_components/HeaderAndFooter'
// function App() {
//   return (
//     <div className='App'>
//       <div className='movie-container'>
//         <HeaderAndFooter />
//       </div>

//     </div>
//   )
// }

import "./App.css"
import NavBar from "./components/NavBar"
const App=()=>{
  return(
    <div className="App">
      <div className="movie-container">
        <NavBar />
      </div>

    </div>
  );
}

export default App;
