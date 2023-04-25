import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import '../cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, decreQty, increQty } from '../reduxwork/CartSlice'


const Cart = () => {

  const { CartItems, CartTotalAmt } = useSelector((state) => state.cart)
  const dispatvher = useDispatch()

  dispatvher(calculateTotal())
  return (
    <div>
      <Row>
        {
          CartItems.map((item) => {
            const iid = item._id
            return (
              <Col sm={12} md={4} lg={3}>
                <Card>
                  <Card.Img className='crtimg' src={"http://localhost:5000".concat(item.foodImage)}></Card.Img>
                  <Card.Body>
                    <p>Food : {item.foodName}</p>
                    <p>Price : {item.foodPrice}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button onClick={() => dispatvher(decreQty({ iid }))}>-</Button>
                    <span className='fs-2 m-1'>{item.qty}</span>
                    <Button onClick={() => dispatvher(increQty({ iid }))}>+</Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <Row>
        <Col><h3>Total: {CartTotalAmt}</h3></Col>
        <Col><Button>Place Order</Button></Col>
      </Row>
    </div>
  )
}

export default Cart