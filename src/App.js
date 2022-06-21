import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Home/ProjectDetails';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:projectId' element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
