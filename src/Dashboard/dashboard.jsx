import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Test from "../Test/test";
import './dashboard.css';

const Dashboard = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();
    const Id = localStorage.getItem('Id');

    useEffect(() => {
        if (Id == null) {
            setSuccessMessage('Please login first to access the Test');
            
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [Id, navigate]);

    return (
        <>
            <div className="box">
                <Container>
                    <h1>{successMessage}</h1>
                    <div className="test-wrapper">
                        <Test />
                       
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Dashboard;
