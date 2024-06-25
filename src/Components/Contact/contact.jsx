import React, { useState } from 'react';
import styled from 'styled-components';
import { darkTheme } from '../Theme/theme';
import videoFile from '../../Components/video/Bottom.mp4';

const ContactForm = () => {  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };      

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <Container id="contact" theme={darkTheme}>
            <VideoBackground>
                <video autoPlay loop muted>
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> *
            </VideoBackground>
            <Overlay>
                <Form onSubmit={handleSubmit}>
                    <h>Email me</h>
                    <div>
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject"></label>
                        <input
                            id="subject"
                            value={subject}
                            onChange={handleSubjectChange}
                            required
                            placeholder="Your Subject"
                        />
                    </div>
                    <div>
                        <label htmlFor="message"></label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                            required
                            placeholder="Your Message"
                        />
                    </div>
                     <ButtonContainer>
                        <button type="submit">Submit</button>
                    </ButtonContainer>
                </Form>
            </Overlay>
        </Container>
    );
};

export default ContactForm;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: #000000 ;

`;

const VideoBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const Overlay = styled.div`
    position: relative;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    width: 100%;
    
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(249, 249, 249, 0.9);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    

    h {
        font-size: 20px;
        padding-left: 5px;
        padding-bottom: 5px;
    }

    div {
        margin-bottom: 5px;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    textarea {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        resize: none;
    }


`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; 
    margin-top: 5px;

    button {
        width: 50%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        text-align: center;
    }

    button:hover {
        background-color: #45a049;
    }

    button:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
