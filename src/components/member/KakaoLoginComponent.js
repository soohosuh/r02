import { Link } from "react-router-dom";

const REST_KEY='1adb302615f1b4288e4b8f6b4fd0109a'
const REDIRECT_URI='http://localhost:3000/member/kakao'

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {
    return ( 
        <div className="text-3xl text-white">
            <Link to={kakaoURL}>KAKAO LOGIN</Link>
        </div>
    );
}
 
export default KakaoLoginComponent;