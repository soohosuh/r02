import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";


const CountButtons = () => {

    const dispatch = useDispatch()

    const handlClickInc = () => {
        dispatch(inc(2,"INC"))
    }

    const handlClickDec = () => {
        dispatch(dec(2,"INC"))
    }

    return ( 
        <div>
            <button onClick={handlClickInc}> INC </button>
            <button onClick={handlClickDec}> DEC </button>
        </div>
    );
}
 
export default CountButtons;