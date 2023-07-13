
//실제 axios에  전달하고 responseDTO를 받아서 처리해주는 Component

import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
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


const ListComponent = ({queryObj,movePage, moveRead}) => {
    // rendering시 에러방지
    const [listData, setListData] = useState(initState)

    // use가 붙으면 component 에서만 쓸수있다.
    // 그외는 자체적으로 제공하는 함수라 생각한다.
    useEffect(()=>{

        getList(queryObj).then(data =>{
            console.log(data)
            setListData(data)
        })

    },[queryObj])

  
    return (  
        <div>
            <div>List Component</div>
            {/* QueryObj는 필요함 search type keyword가 들어가야되기떄문 */}

            <div>
                <ul >
                    {listData.dtoList.map(
                     ({bno,title,replyCount,regDate})   => <li key={bno}
                     onClick={()=> moveRead(bno)}
                     >{bno} - {title}
                    - [{replyCount}]- {regDate}</li>)}
                </ul>
            </div>
            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
    );
}
 
export default ListComponent;