import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import LoginNav from './LoginNav';

const SampleNav = () => {

  const todoArr = useSelector(state => state.todo)

  

  return ( 
    <div className='flex items-center text-white font-extrabold'>
      <div className='m-4 font-size-16px font-serif' >
        <Link to="/">Main</Link>
        <span className='bg-red-500 font-extrabold'>{todoArr.length}</span>
      </div>
      <div  className='ml-20 font-size-16px font-serif'>
        <Link to="/about">About</Link>
      </div>
      <div  className='ml-20 font-size-16px font-serif'>
        <Link to="/products/list">Products</Link>
      </div>
      <div  className='ml-20 font-size-16px font-serif'>
        <Link to="/board/list">Board</Link>
      </div>
      <div className='ml-20'>
        <LoginNav></LoginNav>
      </div>
      
    </div>
  );
}
 
export default SampleNav;