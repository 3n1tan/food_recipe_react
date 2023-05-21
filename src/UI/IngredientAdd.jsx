import React from 'react'
import { styled } from 'styled-components'

const IngredientAdd = ({quantityChange, nameChange, i}) => {
  return (
    <Container>
        <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id='quantity' name='quantity' onChange={(event)=> quantityChange(event, i)} />
        </div>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' onChange={(event)=> nameChange(event, i)} />
        </div>
    </Container>
  )
}

export default IngredientAdd

const Container = styled.div`
    width: 500px;
    height: auto;
`