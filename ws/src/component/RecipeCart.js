import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RecipeCart = ({el}) => {
    console.log()
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.recipe.image} />
  <Card.Body>
    <Card.Title>{el.recipe.label}</Card.Title>
    <Link to={`/details/${el.recipe.uri.slice(51)}`}><Button variant="primary">Deatails</Button></Link>
    
  </Card.Body>
</Card>
    </div>
  )
}

export default RecipeCart