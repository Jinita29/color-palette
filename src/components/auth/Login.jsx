import { ROUTE_USER } from "../../config/routeConfig";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h2>Login</h2>
            <ul>
                <li>
                    <Link to={ROUTE_USER?.HOME}>Back to Home</Link>
                </li>
                
            </ul>
        </>
    )
}

export default Login;