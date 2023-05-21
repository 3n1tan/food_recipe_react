import React from 'react'
import LinkCards from '../pages/LinkCards'
import { styled } from 'styled-components'


const BodyLinks = () => {
  return (
    <Container>
        <LinkCards 
            heading="Browse for more recipes"
            details="Find your favourites through this link. Possibility to search based on recipe's name"
            link="/recipelist"
            linkdetails="All recipes"
        />
        <LinkCards 
            heading="Add custom recipes"
            details="We welcome varieties of recipes all over the world."
            link="/createrecipe"
            linkdetails="Add custom recipes"
        />
        <LinkCards 
            heading="Learn more about our projects"
            details="Visit our programme homepage"
            link="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
            linkdetails="Go to Helsinki Business College Homepage"
        />

    </Container>
  )
}

export default BodyLinks

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    background-color: #3F3B6C;
    height: 45vh;
    padding-top: 4rem;

`