
import React, { useState } from 'react'
import { Col, Container, Row, Form } from "reactstrap";
import API from '../components/modules/api'
// import {Link} from "react-router-dom";
import processImage2 from "../assets/images/process-02.png";
import { TextBox, AnswerBox } from "../components/TextField";
import BackdropLoading from '../components/backdropLoading/BackdropLoading'
import TypeWriter from '../components/modules/TypeWriter'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function Home() {
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false);
    const api = new API();

    async function checkAnswer(event) {
        setLoading(true)
        event.preventDefault();


        const data = {
            question: question,
            answer: answer
        }
        const res = await api.post("http://localhost:5000/api/v1/check", data);
        setResponse(res);
        setLoading(false)
    }



    return (
        <>
            <BackdropLoading load={loading} />
            <section className="bg-home2" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="mb-4 pb-3 me-lg-5">
                                <h6 className="sub-title">ELLIOT'S COLLECTION</h6>
                                <h1 className="display-5 fw-semibold mb-3">Find out Academic Dishonesty with<span className="text-primary fw-bold"> Detect AI</span></h1>
                                <p className="lead text-muted mb-0">Find out the answers provided by ChatGPT simply by inspecting the question asked and the answer the student provided, and we will handle the rest for you 😊.</p>
                            </div>
                            {
                                !loading && response ?
                                    <div>
                                        <Divider>
                                            <Chip label="CHECK RESULT" />
                                        </Divider>
                                        <br />
                                        <div>
                                            <TypeWriter words={response.message} />
                                        </div>
                                        <hr />
                                        <br />

                                        <button className="btn btn-primary submit-btn w-100 h-100" type="button" onClick={() => {
                                            setLoading(true)
                                            setResponse(undefined);
                                            setLoading(false)

                                        }}><i className="uil uil-arrow me-1"></i> Got it!</button>
                                    </div>

                                    :
                                    <Form onSubmit={checkAnswer}>
                                        <div className="registration-form">
                                            <Row className="align-items-center">
                                                <Col md={12}>
                                                    <TextBox onQuestionValueChange={setQuestion} />
                                                </Col>
                                                <Col md={12}>
                                                    <div className="filter-search-form mt-3 mt-md-0">
                                                        <AnswerBox onAnswerValueChange={setAnswer} />
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <br />
                                                    <div className="mt-3 mt-md-0 h-100">
                                                        <button className="btn btn-primary submit-btn w-100 h-100" type="submit"><i className="uil uil-search me-1"></i> Check Answer!</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Form>
                            }

                        </Col>

                        <Col lg={5}>
                            <div className="mt-5 mt-md-0">
                                <img src={processImage2} alt="" className="home-img" />
                            </div>
                        </Col>
                    </Row>

                </Container>

            </section>
        </>
    )
}