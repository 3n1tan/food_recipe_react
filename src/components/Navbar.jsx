import React from 'react'
import { styled } from 'styled-components'
import { Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
        <h1><Link to="/">3AT1T</Link></h1>
        <div className='nav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/recipelist'>Recipe List</Link></li>
                <li><Link to='/createrecipe'>Create Recipe</Link></li>
            </ul>           
        </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #A4BC92;
    padding: 1rem;
    text-indent: 2rem;
    height: 7vh;

    a {
        text-decoration: none;
    }

    h1 a {
        color: red;
        font-size: 3rem;
    }

    .nav ul {
        display: flex;
        gap:6rem;
        list-style: none;
        justify-content: space-between;
    }

    li a {
        font-size: 25px;
        color: white;
    }

    li a:hover {
        color: red;
        transition: 0.5s;
    }

`