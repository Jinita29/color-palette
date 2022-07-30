import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from './../pages/Contact';

export const AuthRoutes = [
    {
        path: '/login',
        component: <Login />
    },
    {
        path: '/register',
        component: <Register />
    },
]


export const UserRoutes = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/about',
        component: <About />
    },
    {
        path: '/contact',
        component: <Contact />
    },
]