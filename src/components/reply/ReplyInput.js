import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";


const initState = {
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyInput = ({bno, refreshLast}) => {

    const [reply, setReply] = useState({...initState})


    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickRegister = (e) => {

        reply.bno = bno

        // {result:223}
        postReply(reply).then(data => {

            console.log(data)

            alert(`${data.result}번 댓글이 등록완료` )

            refreshLast()

            setReply({...initState})

        } )

    }
 
    return ( 
        <div className="m-8 bg-red-200 border-2">
            <div>Reply Input</div>
            <div className="m-2">
                <input type="text" name="replyText" value={reply.replyText} onChange={handleChange}></input>
            </div>
            <div className="m-2">
                <input type="text" name="replyer" value={reply.replyer} onChange={handleChange}></input>
            </div>
            <div className="m-2">
                <button onClick={handleClickRegister}>Register</button>
            </div>
        </div>
     );
}
 
export default ReplyInput;