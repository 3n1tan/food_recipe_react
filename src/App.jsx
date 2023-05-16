import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import RecipeList from './pages/RecipeList'
import Body from './components/Body'
import Layout from './pages/Layout'
import AddRecipe from './pages/AddRecipe'


function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route path='recipelist' element={<RecipeList />} />
          <Route path='createrecipe' element={<AddRecipe />} />
        </Routes>
      

     
    </>
  )
}

export default App
