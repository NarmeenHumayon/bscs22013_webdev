import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import HeaderAndFooter from './assets/movie_components/HeaderAndFooter.jsx'
import MovieList from './assets/movie_components/MovieList.jsx'
import MovieItem from './assets/movie_components/MovieItem.jsx'
import SearchBar from './assets/movie_components/SearchBar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderAndFooter />
    <MovieList />
    <SearchBar />
    <MovieItem />
  </StrictMode>,
)
