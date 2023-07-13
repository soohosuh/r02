import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/ProductAPI"


const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}

const ModifyComponent = ({pno, moveList, moveRead}) => {

    const fileRef = useRef()
    const [product, setProduct] = useState(initState)

    useEffect(() => {
        getProduct(pno).then(data => {
            setProduct(data)
        })
    },[pno])

    const handleClickDelete = () => {

        deleteProduct(pno).then(data => {
            alert("상품삭제")
            moveList()
        }) 
    }
    const handleChange = (e) => {

        console.log("handle change..........")
        product[e.target.name] = e.target.value

        setProduct({...product})
    }

    const handleClickModify = () => {

        const formData = new FormData();

        formData.append("pno", product.pno)
        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        if(product.images){
            for (let pi of product.images){
                formData.append("images", pi)
            }
        }


        const arr = fileRef.current.files

        for(let file of arr){
            formData.append("files", file)
        }

        putProduct(formData).then(data => {

            alert("수정되었습니다.")
            moveRead(pno)
        })
    }

    const handleClickDelImg = (fname) => {

        //const oldArr = product.images
        
        const newArr = product.images.filter(ele => ele !== fname)

        product.images = newArr

        setProduct({...product})
    }


    return ( 
        <div>
            <div className="m-2 p-2 border-2">
                {product.pno}
            </div>

            <div className="m-2 p-2 border-2">
                <input 
                 type='text' 
                 name="pname" 
                 value={product.pname} 
                 onChange={handleChange} />
            </div>
            <div className="m-2 p-2 border-2"> 
                <input 
                 type='text' 
                 name="pdesc" 
                 value={product.pdesc} 
                 onChange={handleChange} />
            </div>
            <div className="m-2 p-2 border-2">
                <input 
                 type='number' 
                 name="price" 
                 value={product.price} 
                 onChange={handleChange} />
            </div>

            <div className="m-2 p-2 border-2">
                <input type='file' ref={fileRef} multiple name='images'></input>
            </div>

            <div className="m-2 p-2 border-2"   >
                <ul className="list-none flex">
                    {product.images.map( (fname,idx) => 
                    <li 
                    key={idx}
                    className="m-2"
                    >
                       <img src={`http://localhost/s_${fname}`}></img> 
                       <button 
                       className="bg-red-500 m-2 p-2"
                       onClick={() => handleClickDelImg(fname)}
                       >x</button>
                    </li>)}
                </ul>
            </div>

            <div>
                <button 
                className="bg-fuchsia-600 border-2 m-2 p-2 text-white font-bold"
                onClick={handleClickModify}
                >
                    Modify
                </button>

                <button 
                className="bg-blue-500 border-2 m-2 p-2 text-white font-bold"
                onClick={moveList}
                >
                    List
                </button>                
                
                <button 
                className="bg-red-500 border-2 m-2 p-2 text-white font-bold"
                onClick={handleClickDelete}
                >
                    Delete
                </button>
            </div>
        </div>
     );
}
 
export default ModifyComponent;