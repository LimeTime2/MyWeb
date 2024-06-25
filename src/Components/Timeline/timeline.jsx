import React, { useRef, useEffect, useState } from 'react';
import './timeline.css';
import { darkTheme } from '../Theme/theme';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Timeline = () => {
    const [isInView1, setIsInView1] = useState(false);
    const [isInView2, setIsInView2] = useState(false);
    const [isInView3, setIsInView3] = useState(false);

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    useEffect(() => {
        const observer1 = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsInView1(true);
                observer1.unobserve(ref1.current);
            }
        });

        const observer2 = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsInView2(true);
                observer2.unobserve(ref2.current);
            }
        });

        const observer3 = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsInView3(true);
                observer3.unobserve(ref3.current);
            }
        });

        observer1.observe(ref1.current);
        observer2.observe(ref2.current);
        observer3.observe(ref3.current);

        return () => {
            observer1.disconnect();
            observer2.disconnect();
            observer3.disconnect();
        };
    }, []);

    const slide1 = useSpring({
        opacity: isInView1 ? 1 : 0,
        transform: isInView1 ? 'translateX(0px)' : 'translateX(150px)',
        config: { duration: 1000 }
    });

    const slide2 = useSpring({
        opacity: isInView2 ? 1 : 0,
        transform: isInView2 ? 'translateX(0px)' : 'translateX(-150px)',
        config: { duration: 1000 }
    });

    const slide3 = useSpring({
        opacity: isInView3 ? 1 : 0,
        transform: isInView3 ? 'translateX(0px)' : 'translateX(150px)',
        config: { duration: 1000 }
    });

    return (
        <TimeLine className="timeline" id="timeline" theme={darkTheme}>
            <Head>Education</Head>

            <div className="timeline-item" ref={ref1}>
                <div className="timeline-icon"></div>
                <animated.div style={slide1}>
                    <div className="timeline-content">
                        <h3>โรงเรียนเทพศิรินทร์</h3>
                        <p>มัธยมศึกษาตอนต้น</p>
                        <p>สาขา: mini english program</p>
                    </div>
                </animated.div>
            </div>

            <div className="timeline-item" ref={ref2}>
                <div className="timeline-icon"></div>
                <animated.div style={slide2}>
                    <div className="timeline-contentL">
                        <h3>โรงเรียนอัสสัมชัญธนบุรี</h3>
                        <p>มัธยมศึกษาตอนปลาย</p>
                        <p>สาขา: สายวิทย์-คอมพิวเตอร์</p>
                    </div>
                </animated.div>
            </div>

            <div className="timeline-item" ref={ref3}>
                <div className="timeline-icon"></div>
                <animated.div style={slide3}>
                    <div className="timeline-content">
                        <h3>สถาบันเทคโนโลยีไทย-ญี่ปุ่น</h3>
                        <p>มหาลัยปริญญาตรี</p>
                        <p>คณะเทคโนโลยีสารสนเทศ สาขามัลติมีเดีย</p>
                    </div>
                </animated.div>
            </div>
        </TimeLine>
    );
};

export default Timeline;

export const TimeLine = styled.div`
  position: relative;
  margin: 0 auto;
  height: 1200px;
  padding: 20px 0;
  background: linear-gradient(to bottom, #800080, #000000); 
`

export const Head = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  text-align: left;
  font-weight: 600;
  color: #FFFFFF;
`