import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/contact';
import Slider from './component/slider';
import HomePage from './component/home';
import Skill from './component/skill';
import Product from './component/product';
import About from './component/experience';
import './App.css';

function App() {
  return (
    <div className='app w-[100vw] h-[100vh] bg-[#414244] flex justify-center items-center'>
      <div className='w-[80vw] h-[70vh] bg-[#343539] flex py-5 rounded-xl'>
        <div className='w-[15%] border-r-2'>
          <Slider />
        </div>
        <div className='p-4 w-[85%] content'>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/product' element={<Product />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
