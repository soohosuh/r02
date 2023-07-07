import { useEffect, useState } from "react";


const initState =  {
  type:'',
  keyword:''
}

const ListSearchComponent = ({queryObj, searchFn}) => {

  const [search, setSearch] = useState(initState)

  useEffect(() => {

    search.type = queryObj.type || ''
    search.keyword = queryObj.keyword || ''
    setSearch( {...search})

  }, [queryObj])



  return (  
    <div className="border-solid border-2 border-indigo-600 m-4 p-4">
      <select className="border-2 m-1 p-1" 
        value={search.type}
        onChange={ e =>  {
          search.type = e.target.value
          setSearch({...search})
        }}
        >
        <option value="">---</option>
        <option value="t">T</option>
        <option value="c">C</option>
        <option value="w">W</option>
        <option value="tc">TC</option>
        <option value="tcw">TCW</option>
        
      </select>
      <input type="text" className="border-2 m-1 p-1"  name="keyword" 
      value={search.keyword}
      onChange={e =>  {
        search.keyword = e.target.value
        setSearch({...search})
      }}
      ></input>
      <button className="border-2 m-1 p-1 "
      onClick={ e => searchFn(search.type, search.keyword)}
      >Search</button>
  </div>
  );
}
 
export default ListSearchComponent;