import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const useCustomLogin = (fn) => {

    const loginInfo = useSelector(state => state.login)

    const navigate = useNavigate()
  
    useEffect(() => {

        if(fn){
            if(!loginInfo.email){
            fn(navigate)
            }
            return
        }
  
        console.log("signed: " + loginInfo.email)
        if(!loginInfo.emaiil){
            navigate("/member/login")
        }
  
    },[loginInfo.email])

    return {loginInfo}

}

export default useCustomLogin