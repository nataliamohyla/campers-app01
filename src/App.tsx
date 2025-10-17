import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CatalogDetailsPage from './pages/CatalogDetailsPage/CatalogDetailsPage';

function App() {
 

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
       <Route path="/catalog/:id" element={<CatalogDetailsPage />} />
      </Routes>
  </Router>

  )
}

export default App
