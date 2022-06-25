import './App.css'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage'

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />

        <Routes>
          {/* render search page*/}
          <Route path="/search" element={<SearchPage />} />

          {/* render home page */}
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
