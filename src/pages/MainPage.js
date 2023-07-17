import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";


const MainPage = () => {
  return ( 
    <div>
      <BasicLayout><h2>Main Page</h2>   
      </BasicLayout>
      <div>
        <TodoList></TodoList>
      </div>
    </div>
    
   );
}
 
export default MainPage;