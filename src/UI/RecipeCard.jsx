import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const RecipeCard = (props) => {
  return (
    <Container>
        <img src={props.image} alt={props.image} />
        <h4>{props.name}</h4> <br />
        <Link to={props.name}>See more</Link>
    </Container>
  )
}

export default RecipeCard

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    text-transform: uppercase;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    position: relative;
    background-color: #F6FFDE;

    img {
        width: 400px;
        height: auto;
    }
`