import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const LinkCards = ({heading, details, linkdetails, link}) => {
    const isExternalLink = link.startsWith("https");
  return (
    <Container>
        <h3>{heading}</h3>
        <p>{details}</p>
        {isExternalLink ? (
            <a href={link} target="_blank" rel="noopener">
            {linkdetails}
            </a>
        ) : (
            <Link to={link}>{linkdetails}</Link>
        )}

    </Container>
  )
}

export default LinkCards

const Container = styled.div`
    width: 450px;
    height: 400px;
    padding: 1rem;
    text-align: left;
    border: 1.2px solid #ECF2FF;
    border-radius: 15px;
    background-color: #C9F4AA;
    line-height: 1.5;
    word-spacing: 2px;
    font-size: 25px;

    a {
        text-decoration: none;

    }

    h3 {
        font-size: 30px;
    }

`