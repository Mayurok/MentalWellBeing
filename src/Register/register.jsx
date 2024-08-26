import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const navigate = useNavigate();

    const handelSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5454/api/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("User Created:", data);

            setSuccessMessage("User registered successfully!");

            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error("Error while creating user:", error.message);
        }
    };

    return (
        <div className="center-form">
            
            <Form onSubmit={handelSubmit}>
                <h1>Register</h1>

                {successMessage && <Alert variant="primary">{successMessage}</Alert>}

                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="username" 
                        placeholder="Enter Username" 
                        value={formData.username} 
                        onChange={handleChange} 
                    />
                </Form.Group>

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
                        placeholder="************" 
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100">Register</Button>
            </Form>
        </div>
    );
}

export default Register;
