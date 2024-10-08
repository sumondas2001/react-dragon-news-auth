import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivetRoutes from "./PrivetRoutes";
import ErrorPages from "../pages/ErrorPages/ErrorPages";



const router = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPages></ErrorPages>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch('/news.json')
               },
               {
                    path: "/news/:id",
                    element:
                         <PrivetRoutes>
                              <News></News>
                         </PrivetRoutes>,
                    loader: () => fetch('/news.json')



               },
               {
                    path: "/login",
                    element: <Login></Login>
               },
               {
                    path: "/register",
                    element: <Register></Register>
               }
          ]
     }
]);
export default router;