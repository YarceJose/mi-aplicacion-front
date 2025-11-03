import { Login } from "../pages/auth/Login";
import { Registro } from "../pages/auth/Registro";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Home } from "../pages/home/Home";


export let AppRouter =[
        {
                path:"/login",
                element:<Login />
        },
        {
                path:"/registro",
                element:<Registro />
        },
        {
                path:"/dashboard",
                element:<Dashboard />
        },
        {
                path:"/",
                element: <Home />
        },

]