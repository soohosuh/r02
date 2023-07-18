import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartNav from "./CartNav";
import { logout } from "../../reducers/loginSlice";


const LoginNav = () => {

    const {email, nickName} = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log("LoginNav.......", email)

    if(email !== ''){
        return(
        <div>
            <div>
                {email} - {nickName}
            </div>
            <button
                onClick={() => {
                    dispatch(logout())
                    navigate("/")
                }}
            >logout</button>
            <CartNav></CartNav>
            
        </div>
        )
    }
    

    return ( 
        <div>
            <div>
                <Link to="/member/login">LOGIN</Link>
            </div>
        </div>
    );
}
 
export default LoginNav;