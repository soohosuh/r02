import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";
import IndexPage from "../pages/board/IndexPage";

import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";

const Loading = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/IndexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))

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
        element: <Suspense fallback={Loading}><Board_Index/></Suspense>,
        children: [
          {
            path: "list",
            element: <Suspense fallback={Loading}><Board_List/></Suspense>
          }
        ]
    }
])

export default router;