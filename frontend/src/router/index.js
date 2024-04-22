//login

//User
import UserLayout from "../layout/user/UserLayout";
import Dashboard from "../pages/users/dashboard/Dashboard";

//Admin
import AdminLayout from "../layout/admin/AdminLayout";
import AdminDashboard from "../pages/admin/dashboard/Dashboard";
import AdminServices from "../pages/admin/services/service";
import AdminReference from "../pages/admin/reference/reference";
import AdminSettings from "../pages/admin/settings/tab";
import AdminQuestions from "../pages/admin/userQuestions/question";
import AdminVehicles from "../pages/admin/vehicles/vehicle";
import AdminOffers from "../pages/admin/offers/Offer";


const routes = [
    {
        // path:"/login",
       //  element:<Login/>
    },
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
        path:'/admin',
        element:<AdminLayout />,
        children:[
            {
                index:true,
                element:<AdminDashboard />
            },
            {
                path:'hizmetler',
                element:<AdminServices />
            },
            {
                path:'referanslar',
                element:<AdminReference />
            },
            {
                path:'araclar',
                element:<AdminVehicles />
            },
            {
                path:'sorular',
                element:<AdminQuestions />
            },
            {
                path:'online-teklif',
                element:<AdminOffers />
            },
            {
                path:'ayarlar',
                element:<AdminSettings />
            },
        ]
    },
]
export default routes;