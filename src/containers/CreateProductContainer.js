import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../actions/productActions'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

class CreateProductContainer extends Component {
  state = {
    'pName': '',
    'pDesc': '',
    'pImage': '',
    'idCategory': '',
    'pQty': '',
    'pDateAdded': new Date(),
    'pDateUpdated': new Date()
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    // const { name, price, currency } = this.state
    const CreateProduct = this.state
    this.props.handleSubmitForm(CreateProduct)
    this.handleClearForm(event)
  }

  handleClearForm = event => {
    event.preventDefault()
    this.setState({ 
      'pName': '',
      'pDesc': '',
      'pImage': '',
      'idCategory': '',
      'pQty': '',
      'pDateAdded': '',
      'pDateUpdated': ''
     })
  }

  render() {
    return (
      <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Add Product</CardTitle>
            </CardHeader>
            <CardBody>
                <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="name">Product name</Label>
                  <Input type="text" name="pName" id="name" autoComplete="off" placeholder="Enter product name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="desc">Description</Label>
                  <Input type="text" name="pDesc" id="desc" autoComplete="off" placeholder="Enter description" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="image">Image</Label>
                  <Input type="text" name="pImage" id="image" autoComplete="off" placeholder="Product Image (URL)"onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                <Label for="idCategory">Select Category</Label>
                  <Input type="select" name="idCategory" id="idCategory" onChange={this.handleChange}>
                    <option value="1">Daily needs</option>
                    <option value="2">Electronic</option>
                    <option value="3">Food & drink</option>
                    <option value="4">Automotive</option>
                  </Input>
                </FormGroup>
                  <FormGroup>
                <Label for="quantity">Quantity</Label>
                <Input type="number" name="pQty" id="quantity" autoComplete="off" placeholder="Quantity" onChange={this.handleChange} />
              </FormGroup>
                <tr>
                    <input type="submit" value="Add data" className="btn btn-success" />
                </tr>
                </form>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    )
  }
}

const mapStateToProps = state => ({ permissions: state.permissions })

const mapDispatchToProps = dispatch => ({
  handleSubmitForm(payload) {
    dispatch(createProduct(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateProductContainer
)
