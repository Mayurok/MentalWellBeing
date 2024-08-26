import { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const TestResults = () => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchTestResults = async () => {
            try {
                const id = localStorage.getItem('Id');

                const response = await fetch(`http://localhost:5454/api/users/${id}`, {
                    method:'GET',                   
                    headers: {'Accept':'application/json'},    
                });

                if (!response.ok) {
                    setError('Failed to fetch test results , Please login first ');

                }

                const data = await response.json();
                
                console.log(data);
                setTests(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTestResults();
    }, []); // Empty dependency array to run the effect only once after the component mounts

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Test Type</th>
                                    <th>Test Score</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tests.map((data) => (
                                    <tr key={data.tid}>
                                        <td>{data.testType}</td>
                                        <td>{data.testScore}</td>
                                        <td>{data.testResult}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TestResults;
