import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Contact from './pages/Contact.jsx';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer.jsx';


function App() {
    return (

        <>
            <div className="app">
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer/>
            </div>

           

            
      
        </>
    );  
}

export default App
