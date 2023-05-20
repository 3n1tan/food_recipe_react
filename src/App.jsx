import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import RecipeList from './pages/RecipeList'
import Layout from './pages/Layout'
import AddRecipe from './pages/AddRecipe'
import RecipeInfo from './pages/RecipeInfo'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route path='recipelist' element={<RecipeList />} />
          <Route path='createrecipe' element={<AddRecipe />} />
          <Route path='recipelist/:recipeinfo' element={<RecipeInfo />} />
        </Routes>
      <Footer />
      

     
    </>
  )
}

export default App
