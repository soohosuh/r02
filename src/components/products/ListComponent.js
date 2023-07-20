import { useEffect, useState } from "react";

import { getList } from "../../api/ProductAPI";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
  dtoList:[],
  end:0,
  start:0,
  next:false,
  prev:false,
  pageNums:[],
  page:0,
  size:0,
  requestDTO: null
}


const ListComponent = ({queryObj, movePage, moveRead}) => {

  const [listData, setListData] = useState(initState)

  
  useEffect(() => {

    getList(queryObj).then(data => {
      console.log(data)
      setListData(data)
    }).catch(err => {

      console.log("---------------------------")
      console.log(err)
      console.log("=======================")
    })

  },[queryObj])



  return ( 
    <div className="m-2 p-2 border-2 bg-blue-400">
      <div> ListComponent</div>

      <div>
        <ul className="flex flex-wrap container justify-center">
          {listData.dtoList.map( dto =>
            <li 
            className="w-2/5 h-[300px] bg-gray-500 m-2 p-2 rounded-md shadow-lg"
            key={dto.pno}
            onClick={() => moveRead(dto.pno)}
            >
                <div className="">
                    <div className="text-white font-extrabold">{dto.pno}</div>
                    <div className="flex justify-center items-center">
                        <img src={`http://localhost/s_${dto.fname}`} alt='ddd'></img>
                    </div>
                    <div className="text-center text-white">
                        {dto.pname} - {dto.price} 리뷰 {dto.reviewCnt} - {dto.reviewAvg}
                    </div>
                    <div>
                        
                    </div>
                </div>
            </li>)}
        </ul>
      </div>

      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

    </div>
   );
}
 
export default ListComponent;