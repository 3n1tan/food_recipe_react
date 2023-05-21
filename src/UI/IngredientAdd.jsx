import React from 'react'
import { styled } from 'styled-components'

const IngredientAdd = ({quantityAdd, nameAdd, i}) => {
  return (
    <Container>
        <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id='quantity' name='quantity' onChange={(event)=> quantityAdd(event, i)} />
        </div>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' placeholder='Enter ingredient name' onChange={(event)=> nameAdd(event, i)} />
        </div>
    </Container>
  )
}

export default IngredientAdd

const Container = styled.div`
    width: 500px;
    height: auto;
`