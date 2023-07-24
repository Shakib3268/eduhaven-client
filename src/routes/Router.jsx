import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../Shared/Login/Login";
import Singup from "../Shared/signup/Singup";
import Coleges from "../pages/college/Coleges";
import Viewcollege from "../pages/college/Viewcollege";
import Admission from "../pages/Admssion/Admission";

const router = createBrowserRouter ([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Singup></Singup>
        },
        {
          path:'colleges',
          element:<Coleges></Coleges>
        },
        {
          path:'/allcollege/:id',
          element: <Viewcollege></Viewcollege>,
          loader: ({params}) => fetch(`http://localhost:5000/allcollege/${params.id}`)
        },
        {
          path:'admission',
          element:<Admission></Admission>
        }
      ]
    },
  ]);
  
  export default router;