import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import cmsHttp from "../../../http/cmsHttp";
import { fromStorage, inStorage } from "../../../lib/functions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdmin } from "../../../store/adminSlice";

const LoginIndex = () => {
    const [remember, setRemember] = useState();
    const [loading, setLoading] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const admin = useSelector((state) => state.admin);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        email: [],
        password: [],
    });
    const handleChange = (event) => {
        const { id, value } = event.target;
        setForm({
            ...form,
            [id]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        // Object.keys(error).map(name=>setError({
        //     ...error,
        //     [name]:[]
        // }));
        cmsHttp
            .post("/cms/login", form)
            // .then(({ data }) => {})
            // .catch(({ errors }) => {})
            // .finally(() => setLoading(false));
            .then(({ data }) => {
                inStorage("admin_token", data.token, remember);
                dispatch(setAdmin(data.admin));
                // navigate("/cms", { replace: true });
                console.log(fromStorage("admin_token"));
                console.log(admin);
            })
            .catch((err) => {
                const errors = err.response.data.errors;
                Object.keys(errors).map((key) =>
                    setError({
                        ...error,
                        [key]: errors[key],
                    })
                );
            })
            .finally(() => setLoading(false));
    };
    return (
        <Container>
            <Row>
                <Col xs="12" className="bg-white py3 my-3 rounded-2 shadow-sm">
                    <Row>
                        <Col>
                            <h1>Login</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email">
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        placeholder="Email address"
                                        defaultValue={form.email}
                                        required
                                        onChange={handleChange}
                                    >
                                        {error.email.length ? (
                                            <Form.Control.Feedback type="invalid">
                                                <ul>
                                                    {error.email.map(
                                                        (msg, i)(
                                                            <li
                                                                key={`email.${i}`}
                                                            >
                                                                {msg}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </Form.Control.Feedback>
                                        ) : null}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="password">
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        defaultValue={form.password}
                                        required
                                        onChange={handleChange}
                                    >
                                        {error.password.length ? (
                                            <Form.Control.Feedback type="invalid">
                                                <ul>
                                                    {error.password.map(
                                                        (msg, i)(
                                                            <li
                                                                key={`password.${i}`}
                                                            >
                                                                {msg}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </Form.Control.Feedback>
                                        ) : null}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember Me"
                                        id="remember"
                                        defaultChecked={remember}
                                        onChange={(e) =>
                                            setRemember(e.target.checked)
                                        }
                                    ></Form.Check>
                                </Form.Group>
                                <Form.Group className="mb-3 d-grid">
                                    <Button
                                        type="submit"
                                        variant="outline-dark"
                                        disabled={loading}
                                    >
                                        <i
                                            className={
                                                loading
                                                    ? "fa-solid fa-spinner me-2"
                                                    : "fa-solid fa-sign-in-alt me-2"
                                            }
                                        ></i>
                                        Login
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginIndex;
