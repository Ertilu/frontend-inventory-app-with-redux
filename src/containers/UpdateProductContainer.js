import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProduct } from '../actions/productActions'
import { capitalize } from '../utils/textTransform'
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
  Button
} from "reactstrap";

class UpdateProductContainer extends Component {
  state = {
    pId: '',
    pName: '',
    pDesc: '',
    pImage: '',
    idCategory: '',
    pQty: '',
    pDateAdded: '',
    pDateUpdated: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const updatedProductData = this.state
    this.props.handleSubmitForm(updatedProductData)
    this.handleClearForm(event)
  }

  handleClearForm = event => {
    event.preventDefault()
    this.props.onUpdateSuccess()
  }

  componentDidMount() {
    const { pId, pName, pDesc, pQty, pImage, idCategory, pDateAdded, pDateUpdated } = this.props
    this.setState({ pId, pName, pDesc, pQty, pImage, idCategory, pDateAdded, pDateUpdated })
  }

  render() {
    const { pId, pName, pDesc, pQty, pImage, idCategory, pDateAdded, pDateUpdated } = this.state
    return (
       <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Product name</Label>
            <Input type="text" name="pName" id="name" autoComplete="off" placeholder="Enter product name" value={pName} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="desc">Description</Label>
            <Input type="text" name="pDesc" id="desc" autoComplete="off" placeholder="Enter description" value={pDesc} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input type="text" name="pImage" id="image" autoComplete="off" placeholder="Product Image (URL)" value={pImage} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="idCategory">Select Category</Label>
            <Input type="select" name="idCategory" id="idCategory" value={idCategory} >
              <option value="1">Daily needs</option>
              <option value="2">Electronic</option>
              <option value="3">Food & drink</option>
              <option value="4">Automotive</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input type="number" name="pQty" id="quantity" autoComplete="off" placeholder="Quantity" value={pQty} onChange={this.handleChange} />
          </FormGroup>
  
          <Button type="submit" color="primary" onClick={this.toggle}>Edit data</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ownProps
}

const mapDispatchToProps = dispatch => ({
  handleSubmitForm(payload) {
    dispatch(updateProduct(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(
  UpdateProductContainer
)
