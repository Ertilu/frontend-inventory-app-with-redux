import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import Title from './Title'
import Delete from './Delete'
import Update from './Update'

import { hasReadPermission } from '../utils/hasPermission'
// const { id, name, description, quantity, onDelete, image, category, dateAdded, dateUpdated } = this.props;
class ProductList extends React.Component  {
 
  render() {
    return(
       <div> 
      { this.props.products.map(product => {
          return <Product key={product.pId} {...product} />
        })
      }
    </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products

})


export default connect(mapStateToProps)(ProductList)

// import React, {Component} from 'react';
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import axios from 'axios';
// // import {confirmAlert} from 'react-confirm-alert';
// // import 'react-confirm-alert/src/react-confirm-alert.css';
// import { connect } from 'react-redux'
// import Title from './Title'
// import Delete from './Delete'
// import Update from './Update'
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   Row,
//   Col,
//   Button, 
//   Modal, 
//   ModalHeader, 
//   ModalBody, 
//   ModalFooter,
//   FormGroup,
//   Label,
//   Input
// } from "reactstrap";
// // import Modal from 'react-bootstrap/Modal';
// // import ModalTitle from 'react-bootstrap/ModalTitle';
// // import ModalDialog from 'react-bootstrap/ModalDialog';
// // import ModalBody from 'react-bootstrap/ModalBody';

// class ProductList extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         modal: false,
//         pId: this.props.id,
//         pName: this.props.name,
//         pDesc: this.props.description,
//         pImage: this.props.image,
//         idCategory: this.props.idCategory,
//         pQty: this.props.quantity,
//         pDateAdded: new Date(),
//         pDateUpdated: new Date(),
//         products: []
//       };
//     }
  
//     render() {
//         const { id, name, description, quantity, onDelete, image, category, dateAdded, dateUpdated } = this.props;
        
//         const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
//        return ( 
//         <div key={id}>
//             <p>Product name : {name}</p>
//             <p>Description : {description}</p>
//             <div>
//             <img src={image} alt={name} style={{widt: 'green', fontWeight: 'bold'}} />
//             </div>
//             <p>Category : {category}</p>
//             <p>Quantity : {quantity}</p>
//             <p>Date Added : {dateAdded}</p>
//             <p>Date Updated : {dateUpdated}</p>
//             <button onClick={this.deleteConfirm} className="btn btn-danger">delete data</button>
//             {/* <Link to={"editProduct/" + id }> */}
//             <Button color="success" className="btn btn-success" onClick={this.toggle} >Edit data</Button>
//             {/* </Link> */}
//             {/* <Route path="editProduct/"  component={EditProduct}/> */}
//         </div>
//       ); 
//     }
//   }

//   const mapStateToProps = state => ({
//     products: state.products
//   })

//   export default connect(mapStateToProps)(ProductList)