import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    // State to hold login credentials
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="container ">
            <div className="row justify-content-center ">
                <div className="col-md-6 ">
                    <h2 className="text-center mb-4 ">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="mt-3" variant="dark" type="submit"  block>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
