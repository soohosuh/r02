import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoSlice";


const TodoInput = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleClickSave = () => {
        dispatch(addTodo(text))
    }

    return ( 
        <div>
            Todo Input
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={handleClickSave}>SAVE</button>
        </div>
     );
}
 
export default TodoInput;