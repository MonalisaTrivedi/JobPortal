import './App.css';
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Jobs from './Pages/Jobs';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Cars from './Components/Cars';
import b1 from '../src/images/blog-image-1-940x460.jpg';
import b2 from '../src/images/blog-image-2-940x460.jpg';
import b3 from '../src/images/blog-image-3-940x460.jpg';
import Blog_details from './Pages/Blog_details';
import Testing from './Components/Testing';
import Team from './Pages/Team';



function App() {

  const blogData = [
    {image: b1, title:"Lorem ipsum dolor sit amet, consectetur adipisicing."},
    {image: b2, title:"Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta."},
    {image: b3, title:"Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil."}
  ];

  return (
   <>
   {/* <Testing/> */}
   {/* <Cars/> */}
   <Routers>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home name="Monalisa"/>}/>
      <Route path='/Jobs' element={<Jobs/>}/>
      <Route path='/Blog' element={<Blog  data={blogData}/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Blog_details' element={<Blog_details/>}/>
      <Route path='/Team' element={<Team/>}/>
    </Routes>
    <Footer/>
   </Routers>
   </>
  );
}

export default App;
