import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import{createBrowserRouter,RouterProvider}from 'react-router-dom'
import MovieDetails from './Component/MovieDetails/MovieDetails';
import Layout from './Component/Layout/Layout';
import TopSearches from './Component/TopSearches/TopSearches';
import { ApiContext } from './Component/Context/Context';
import DocumentaryList from './Component/DocumentaryList/DocumentaryList';
import AdventureList from './Component/Adventure/AdventureList';
import CrimeList from './Component/CrimeList/CrimeList';
// import ActionList from './Component/Action/ActionList';
// import ActionLists from './Component/Action/ActionListss';
import CrimeLists from './Component/CrimeList/Crimelists';
import Crimes from './Component/CrimeList/Crimes';
import DocumentaryLists from './Component/DocumentaryList/DocumentaryLists';
import Documentaries from './Component/DocumentaryList/Documentaries';
import ComedyList from './Component/ComedyList/ComedyList';
import ComedyLists from './Component/ComedyList/ComedyLists';
import Comedyy from './Component/ComedyList/Comedyy';
import PopularMovies from './Component/PopularMovies/PopularMovies';
import PopularActors from './Component/PopularActors/PopularActors';
import ActorsDetails from './Component/ActorsDetails/ActorsDetails';
import Video from './Component/Video/Video';


function App() {

 let routes= createBrowserRouter([
    {path:'/' , element:<Layout/>,children:[
      {index:true,element: <Home />},
      {path:'PopularMovies',element:<PopularMovies/>},
      {path:'PopularActors',element:<PopularActors/>},
      {path:'ActorsDetails/:id/:actorpath',element:<ActorsDetails/>},
      {path:'home',element:<Home/>},
      {path:'Video',element:<Video/>},
      {path:'TopSearches',element:<TopSearches/>},
      {path:'DocumentaryList',element:<DocumentaryList/>},
      {path:'Documentary2',element:<DocumentaryLists/>},
      {path:'Documentary3',element:<Documentaries/>},
      {path:'AdventureList',element:<AdventureList/>},
      {path:'Crime',element:<CrimeList/>},
      {path:'Crime2',element:<CrimeLists/>},
      {path:'Crime3',element:<Crimes/>},
      {path:'comedy',element:<ComedyList/>},
      {path:'comedy2',element:<ComedyLists/>},
      {path:'comedy3',element:<Comedyy/>},
      // {path:'action',element:<ActionList/>},
      // {path:'action',element:<ActionLists/>},

    ]},
  ])
  return <>
  <ApiContext>
  <RouterProvider router={routes}/>
  </ApiContext>
  </>
}

export default App;
