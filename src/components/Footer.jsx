import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <p>
        &#169; Copyright, 2023. All rights reserved Enitan Odupitan.
        </p>

    </Container>
  )
}

export default Footer

const Container = styled.div`

p {
    margin-left: 45rem;
    margin-top: 5rem;
    
}

`