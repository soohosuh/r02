import { useEffect, useState } from "react";
import { getProduct } from "../../api/ProductAPI";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";

const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}

const ReadComponent = ({pno, moveModify, moveList}) => {

    const {email} = useSelector(state => state.login)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        }).catch(e => {
            console.log(e)
            moveList()
        })

    },[pno])


    return ( 
        <div>
            <div className="m-2 p-2">
            <div className="m-2 p-2 border-2">
                {product.pname}
            </div>
            <div className="m-2 p-2 border-2"> 
                {product.pdesc} 
            </div>
            <div className="m-2 p-2 border-2">
                {product.price}
            </div>
            <div className="m-2 p-2 border-2"   >
                <ul className="list-none">
                    {product.images.map( (fname,idx) => 
                    <li key={idx}>
                       <img src={`http://localhost/${fname}`}></img> 
                    </li>)}
                </ul>
            </div>
            <div>
                <button 
                className="bg-orange-400 border-2 m-2 p-2 text-white font-bold"
                onClick={() => {
                    dispatch(addCartThunk({email,pno}))
                }}
                >
                    Add Cart
                </button>
                <button 
                className="bg-orange-400 border-2 m-2 p-2 text-white font-bold"
                onClick={() => moveModify(product.pno)}
                >
                    Modify
                </button>
                <button 
                className="bg-blue-500 border-2 m-2 p-2 text-white font-bold"
                onClick={moveList}
                >
                    List
                </button>
            </div>
        </div>
        </div>
     );
}
 
export default ReadComponent;