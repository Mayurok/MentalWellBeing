import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    // const [username,setUsername] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5454/api/login',{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Login Successful:", data);
    
            localStorage.setItem('Id', data.user.uid);
    
            // Set username and display success message
            localStorage.setItem('username',data.user.username);
            const uname = localStorage.getItem('username');
            setSuccessMessage(`Login successful! Welcome ${uname}`);
    
            setTimeout(() => {
                navigate('/');
            }, 2000);
    
        } catch (error) {
            setErrorMessage("Invalid credentials ,try again with valid credentials");
            console.log("Error during login:", error.message);
        }
    }

    return (
        <div className="center-form">
            <Form onSubmit={handleSubmit}>
                <h1 className="pt-0 c-orange">Login</h1>

                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                {successMessage && <p variant="success" className="text-success">{successMessage}</p>}

                <Form.Group>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="Enter Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        placeholder="Enter Password" 
                        value={formData.password}  
                        onChange={handleChange} 
                    />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100">Login</Button>
            </Form>
        </div>
    );
}

export default Login;
