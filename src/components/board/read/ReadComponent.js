import { useState } from "react";

const initState = {
  bno:0,
  title:'',
  content:'',
  writer:'',
  regDate:'',
  modDate:''
}

const ReadComponent = ( {bno}) => {

  const [board, setBoard] = useState(initState)

  return (
    <div>
      Board Read Component {bno}
    </div>
   );
}
 
export default ReadComponent;