import Navigation from "./Navigation/Navigation"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import css from "../components/App.module.css"

const HomePage = lazy(()=> import("../pages/HomePage/HomePage"))
const MoviesPage = lazy(()=> import("../pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(()=> import("../pages/MovieDetailsPage/MovieDetailsPage"))
const MovieCast = lazy(()=> import("../components/MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("../components/MovieReviews/MovieReviews"))

export default function App() {

  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<p>Loading fims...</p>
      }>

        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/movies" element={<MoviesPage/>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast/>}/>
          <Route path="reviews" element={<MovieReviews/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>

      </Suspense>
    
      

    </div>
      
    
  );
}

