import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <Container id="footer">
            <Name>Pattarapong Sakwaykin</Name>
            <FooterSection>
                <Company>Company</Company>
                <SocialLinks>
                    <StyledIcon icon={faFacebook} />
                    <StyledIcon icon={faInstagram} />
                    <StyledIcon icon={faTwitter} />
                </SocialLinks>
                <Copyright>Copyright &copy;2024; Designed by Pattarapong Sakwaykin</Copyright>
            </FooterSection>
        </Container>
    )
}

export default Footer

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  background-color: #686D76;
  border: 1px solid purple;
  flex-direction: column;
`

export const Name = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #ffffff;
`

export const Company = styled.div`
  font-size: 18x;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #ffffff;
`

export const FooterSection = styled.div`
  width: 25%;
  padding: 0 15px;
  
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
`


const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  background: #fff;
  border-radius: 50%;
  padding: 10px;
  margin: 0 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
    background-color: #D6CDD2 ;
    transform: scale(1.1);
  }
`

export const Copyright = styled.div`
  font-size: 18x;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom:20px;
  color: #ffffff;
`

