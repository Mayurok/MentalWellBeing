import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { QuizData } from '../TestData/testdata';
import { useNavigate } from "react-router-dom";
import './taketest.css';

const QuizForm = ({ questions, title, onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title text-center">{title}</h2>
      <Form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <Card className="quiz-card mb-3" key={index}>
            <Card.Header className="quiz-card-header">
              <Card.Title>{question.question}</Card.Title>
            </Card.Header>
            <Card.Body className="quiz-card-body">
              <Row>
                <Col md={12}>
                  {question.options.map((option, idx) => (
                    <Form.Check
                      type="radio"
                      key={idx}
                      label={option}
                      name={`question-${index}`}
                      value={idx}
                      className="mb-2"
                      onChange={() => handleOptionChange(index, idx)}
                      style={{ textAlign: 'left' }}
                      id={`option-${index}-${idx}`}
                    />
                  ))}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
        <div className="text-center mt-4">
          <Button variant="warning" type="submit" className="quiz-submit-button">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

const Taketests = () => {
  const testType = "Depression"; // Default test type
  const navigate = useNavigate();
  const questions = QuizData.filter(q => q.illness === testType);

  const handleSubmit = async (answers) => {
    let score = 0;

    // Calculate the score based on correct answers
    answers.forEach((answer, index) => {
      if (questions[index]?.answer.includes(answer)) {
        score += 2;
      }
    });

    // Determine the test result based on the score
    const testResult = score > 12 ? "Depression" : "Your Mental health seems Good-";

    // Prepare the data to be sent
    const postData = {
      testResult: testResult,
      testScore: score,
      testType: testType
    };

    // Send the data to the API
    const userId = localStorage.getItem('Id'); // Ensure you store userId properly
    try {
      const response = await fetch(`http://localhost:5454/api/posttest?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit test results');
      }

      const result = await response.json();
      console.log("Test result submitted:", result);

      navigate('/home/testresult');
    } catch (error) {
      console.error("Error submitting test result:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="container-center">
      <Container>
        <Row className="justify-content-center ">
          <Col md={8}>
            <QuizForm
              questions={questions}
              title={`${testType} Test`}
              onSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Taketests;
