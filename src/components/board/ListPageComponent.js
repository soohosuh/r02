

const ListPageComponent = ({data, handleClickPage}) => {
  
  const {start,end, prev,next,pageNums,page,size,requestDTO} = data


  return ( 

    <div className="flex m-4 p-2">
    <ul className="flex">

      {prev ? <li 
        className="m-2 p-2 bg-blue-500 border-2 text-white font-bold"
        onClick={() => handleClickPage(start -1)}
        >PREV</li>:<></>}  

      {pageNums.map(num => 
        <li 
        className="m-2 p-2 bg-blue-500 border-2 text-white font-bold" 
        onClick={() => handleClickPage(num)}
        key={num}
        >
          {num}
        </li>)}

        {next ? <li 
        className="m-2 p-2 bg-blue-500 border-2 text-white font-bold" 
        onClick={() => handleClickPage(end + 1)}
        >NEXT</li>:<></>}    
    </ul>
  </div> 
  );
}
 
export default ListPageComponent;