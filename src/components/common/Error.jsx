import {Link} from 'react-router-dom';
import { ROUTE_USER } from "../../config/routeConfig";

const Error = () => {
    return (
        <>
            <h2>Error</h2>
            <ul>
                <li>
                    <Link to={ROUTE_USER?.HOME}>Back to Home</Link>
                </li>
                
            </ul>
        </>
    )
}

export default Error;