import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";

//라우터 설정
//https://reactrouter.com/en/main/start/tutorial 참조
const router = createBrowserRouter([
    {
        path:"", //"/"
        element: <MainPage></MainPage>
    },
    {
        path: "about", //"/about"
        element: <AboutPage></AboutPage>
    },
    {
        path: "board",
        element: <div>Board</div>,
        children: [
          {
            path: "list",
            element: <ListPage></ListPage>
          }
        ]
    }
])

export default router;