import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Delete from './Delete'
import Update from './Update'
import { getProducts, deleteProduct } from '../actions/productActions'
import { connect } from 'react-redux'

class productItem extends Component {

    deleteProduct = pId => {
          this.props.handleDeleteProduct(pId)
      }

      deleteConfirm = () =>  {
        confirmAlert({
          title: 'Confirmation',
          message: `Are you sure want to delete this product ${this.props.pName} ?`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.deleteProduct(this.props.pId)
            },
            {
              label: 'No',
              onClick: () => {} 
            }
          ]
        })
      }

    render() {
        const { pId, pName, pDesc, pQty, onDelete, pImage, category, pDateAdded, pDateUpdated } = this.props;
        return (
        <div key={pId} style={{fontSize: '20px'}}>
            <p>Product name : {pName}</p>
            <p>Description : {pDesc}</p>
            <div>
            <img src={pImage} alt={pName} style={{width: '500px'}} />
            </div>
            <p>Category : {category}</p>
            <p>Quantity : {pQty}</p>
            <p>Date Added : {pDateAdded}</p>
            <p>Date Updated : {pDateUpdated}</p>
            <pre>
              <Update {...this.props} /><Delete id={pId} handleDelete={this.deleteConfirm} />
            </pre>
            
            
        </div>
      ); 
    }
  }

  const mapDispatchToProps = dispatch => ({
    handleDeleteProduct(payload) {
      dispatch(deleteProduct(payload))
    }
  })

export default connect(null, mapDispatchToProps)(productItem);