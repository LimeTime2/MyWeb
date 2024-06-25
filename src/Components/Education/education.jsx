import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Bio } from '../Constants/constants';
import Typewriter from 'typewriter-effect';
import { darkTheme } from '../Theme/theme';
import videoFile from '../../Components/video/Try.mp4';
import imgFile from '../../Components/pic/profile.jpg';

function Education() {
    const profileRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = profileRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // ตำแหน่ง X ของเมาส์ในรูป
        const width = rect.width;
        
        // คำนวณว่าจะเอียงไปทางซ้ายหรือขวา
        const rotateY = (x < width / 2) ? -15 : 15;

        profileRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        profileRef.current.style.transform = 'none';
    };

    return (
        <Section id="education" theme={darkTheme}>
            <Overlay>
                <VideoBackground>
                    <video autoPlay loop muted>
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </VideoBackground>

                <EduAll>
                    <EduTextContainer>
                        <EduText>
                            <StyledH2>Hi, I am</StyledH2>
                            <StyledH2>{Bio.name}</StyledH2>
                            <StyledH2>I am a {' '}
                                <TypewriterWrapper>
                                    <Typewriter
                                        options={{
                                            strings: Bio.role,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </TypewriterWrapper>
                            </StyledH2>

                            <StyledP>
                                I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                            </StyledP>
                            <ResumeButton href='https://drive.google.com/file/d/1r37CRhdIbI4D36ISk_KaxUS-zAoUnw3A/view'>Check Resume</ResumeButton>
                        </EduText>
                    </EduTextContainer>
                    <EduPic>
                        <ProfileContainer>
                            <Profile
                                ref={profileRef}
                                src={imgFile}
                                alt='Profile'
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            />
                        </ProfileContainer>
                    </EduPic>
                </EduAll>
            </Overlay>
        </Section>
    );
}

const Section = styled.section`
  position: relative;
  overflow: hidden;
  color: #FFFFFF;
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
`;

const EduAll = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;
  height: 400px;
  max-width: 1140px;
  margin: auto;
`;

const EduTextContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
`;

const EduText = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 20px;
  text-align: justify;
  color: #FFFFFF;

  h2 {
    text-align: left;
    width: 100%;
    margin: 0;
    font-size: 24px;
    line-height: 1.2;
  }

  a {
    margin: 0;
    text-align: left;
    width: 100%;
  }
`;

const EduPic = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: justify;
`;

const ProfileContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
`;

const Profile = styled.img`
  height: 350px;
  width: 350px;
  position: relative;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease-in-out;
  transform-origin: center center;

  &:hover {
    transform: scale(1.05); /* ขยายภาพขึ้นเล็กน้อย */
  }
`;

const StyledH2 = styled.h2``;

const StyledP = styled.p``;

const TypewriterWrapper = styled.span`
  display: inline-block;
`;

const ResumeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DC3545;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  margin-top: 15px;
  color: #FFFFFF;
  font-weight: 600;
  transition: background-color 0.3s;
  max-width: 150px;
  height: 40px;
  align-self: flex-start;

  &:hover {
    background-color: #c82333;
  }
`;

export default Education;
