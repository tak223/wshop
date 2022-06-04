import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getonerecipe } from '../redux/actions'

const Details = () => {
    const onerecipe=useSelector(state=>state.recipereducer.onerecipe)
    const {id}=useParams()
// console.log(typeof(id))
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getonerecipe(id))
    
    }, [])
    console.log(onerecipe)
    
  return (
    <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={onerecipe.image} />
  <Card.Body>
    <Card.Title>{onerecipe.label}</Card.Title>
    <Link to='/'><Button variant="primary">Home</Button></Link>
    
  </Card.Body>
</Card>
    </div>
  )
}

export default Details