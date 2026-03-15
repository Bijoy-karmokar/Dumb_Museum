import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import axios from "axios";
import MuseumDetails from "../Pages/MuseumDetails";
import Dashboard from "../Pages/Dashboard";

 const router = createBrowserRouter([
    {
      path:"/",
      Component:MainLayouts,
      children:[
        {
            index:true,
            Component:Home,
            loader:async()=> {
             const res =  await axios('/museums.json');
             return res.data;
            }
        },
        {
          path:'/museums/:id',
          Component:MuseumDetails,
          loader:async({params})=>{
              const res = await axios('/museums.json');
              const museums = res.data;
              const data = museums.find(museum=> museum.id === parseInt(params.id));
              return data;
          }
        },
        {
          path:'/dashboard',
          Component:Dashboard,
          loader:async()=> {
             const res =  await axios('/museums.json');
             return res.data;
            }
        }
      ]
    }
])
export default router;