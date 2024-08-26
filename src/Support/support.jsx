import React from 'react';
import { useLocation } from 'react-router-dom';

const Support = () => {
    const location = useLocation();
    const { testResult } = location.state || {}; // Get the test result from state

    const renderSolution = () => {
        switch(testResult) {
            case 'Depression':
                return (
                    <div>
                        <h2>Overcoming Depression</h2>
                        <p>Depression is challenging, but you can overcome it with the right support and strategies.</p>
                        <ul>
                            <li>Seek professional help from a therapist or counselor.</li>
                            <li>Engage in regular physical activity to boost your mood.</li>
                            <li>Stay connected with friends and family.</li>
                            <li>Practice mindfulness and meditation.</li>
                            <li>Consider joining a support group.</li>
                            <li>Ensure a healthy diet and get adequate sleep.</li>
                        </ul>
                    </div>
                );
            case 'Anxiety':
                return (
                    <div>
                        <h2>Managing Anxiety</h2>
                        <p>Anxiety can be overwhelming, but there are effective ways to manage it.</p>
                        <ul>
                            <li>Practice deep breathing and relaxation techniques.</li>
                            <li>Avoid caffeine and alcohol, which can exacerbate anxiety.</li>
                            <li>Engage in regular exercise to reduce stress.</li>
                            <li>Break down tasks into smaller steps to avoid feeling overwhelmed.</li>
                            <li>Consider therapy or counseling to address underlying issues.</li>
                            <li>Stay connected with a support system of friends and family.</li>
                        </ul>
                    </div>
                );
            default:
                return <p>No specific solution available.</p>;
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Well-Being Solutions</h1>
            {renderSolution()}
        </div>
    );
};

export default Support;
