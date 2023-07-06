import { Link } from "react-router-dom";

const SampleNav = () => {
    return ( 
        <div className="flex  text-white font-extrabold items-center">
            <div>
                <img src={require('../../image/menuicon.png')} width={32}/>
            </div>
            <div className="m-4 font-size-16px font-serif">
                <Link to="/">Main</Link>
            </div>
            <div className="m-4 font-size-16px font-serif">
                <Link to="/about">About</Link>
            </div>
            <div className="m-4 font-size-16px font-serif">
                <Link to="/board/list">Board</Link>
            </div>
        </div>
    );
}
 
export default SampleNav;