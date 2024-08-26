import { Button, Form } from "react-bootstrap";
import './test.css'
import { Link,Outlet ,useNavigate} from "react-router-dom";


const Test=()=>{

    const username = localStorage.getItem('username')
    const navigate = useNavigate();

    const handelLogout=()=>{
    
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.clear();
            navigate('/login'); 
        } else {
            navigate('/'); 
        }
    
    };

    return(
        <>
           
            <Form className="cont1">
                <h2>Welcome to the DashBoard {username}</h2>
                <Form.Group>
                    <Button className="button" as={Link} to="/home/taketest">Take Depression Test</Button>
                    <Button className="button" as={Link} to="/home/ataketest">Take Anxity Test</Button>
                    <Button className="button" as={Link} to="/home/testresult">Test Results</Button>
                    <Button className="button" onClick={handelLogout}>Logout</Button>
                </Form.Group>
            </Form>
            <Outlet/>
        
        </>
    )
}
export default Test;