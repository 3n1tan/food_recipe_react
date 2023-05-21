import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <Container>
        <p>3at1t</p>
        <p>Building world's foremost app using React</p>
        <button><Link to="/recipelist">Browse recipes</Link></button>
    </Container>
  )
}

export default Body

const Container = styled.div`
    height: 70vh;
    background-image: url('src/assets/Images/food.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 20%;

    p:first-child {
        font-size:8.5rem;
        padding: 10rem 0 0 15rem;
        color: yellow;
    }

    p:nth-child(2) {
        color: white;
        padding-left: 30rem;
        font-size: 35px
    }

    button {
        margin: 5rem 0 0 45vw;
        color: blue;
        background-color: yellow;
        border: none;
    }

    button a {
        font-size: 25px;
        text-decoration: none;
        
    }
`