//User
import UserLayout from "../layout/user/UserLayout";
import Dashboard from "../pages/users/dashboard/Dashboard";
//private


//Admin



const routes = [
    {
        path:'/',
        element:<UserLayout />,
        children:[
            {
                index:true,
                element:<Dashboard />
            }
        ]
    },
    {
        // path:"/login",
       //  element:<Login/>
    }
]
export default routes;