import { Link } from 'react-router-dom';
import { ROUTE_USER } from "../../config/routeConfig";

const Register = () => {
    return (
        <>
            <h2>Register</h2>
            <ul>
                <li>
                    <Link to={ROUTE_USER?.HOME}>Back to Home</Link>
                </li>
                
            </ul>
        </>
    )
}

export default Register;