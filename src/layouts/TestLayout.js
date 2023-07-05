import { Link } from "react-router-dom";

//페이지 레이아웃
const TestLayout = ({children}) => {
    return ( 
        <div>
            <div>//메뉴목록
              <h2> <Link to={"/"}>Main</Link> </h2>
              <h2> <Link to={"/about"}>About</Link> </h2>        
            </div>
            <div>//내용물
              {children}
            </div>
        </div>
     );
}
 
export default TestLayout;