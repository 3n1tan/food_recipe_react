import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <Container>
        <h1>3AT1T</h1>
        <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>Add new recipe</li>
        </ul>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #A4BC92;
    padding: 1.5rem;

    ul {
        cursor: pointer;
        color: red;
        
    }

    ul li {
        list-style: none;
        display: inline-block;
        font-size: 25px;
        padding-left: 2rem
    }

`