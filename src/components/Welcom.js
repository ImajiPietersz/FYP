import { Fragment } from "react";
import {Link} from 'react-router-dom'

const Welcome = () => {
    return ( 
        <div className="welcome-container">
            <h1>Welcome</h1>
            <Link to='/generate' className="btn btn-primary mt-5" >Continue</Link>
        </div>
        
     );
}
 
export default Welcome;