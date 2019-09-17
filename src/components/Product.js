import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from '../store'
import ProductItem from './ProductItem'
import { getProducts, deleteProduct } from '../actions/productActions';

// import { getPermissions } from './actions/permissionActions'
// store.dispatch(getPermissions())
class Product extends Component {
    static propTypes = {
      getProducts: PropTypes.func.isRequired,
      product: PropTypes.object.isRequired,
      pId: PropTypes.number,
      pName: PropTypes.string,
      pDesc: PropTypes.string,
      pQty: PropTypes.number,
      pImage: PropTypes.string,
      idCategory: PropTypes.number,
      category: PropTypes.string,
      pDateAdded: PropTypes.string,
      pDateUpdated: PropTypes.string
    }
    
    componentDidMount() {
      store.dispatch(getProducts());
    
      localStorage.removeItem('search');
      localStorage.removeItem('by');
      localStorage.removeItem('type');
      localStorage.removeItem('page');
    }
  
  render() {
    return ( 
       <div>
          {
            this.props.products.map(product => {         
              return (
              <ProductItem
                key={product.pId}
                {...product}
              />
              );
            })
          }
       </div>
    );
  }
}

const mapStateToProps = state => ({
	products: state.products,
	user: state.user
})

const mapDispatchToProps = dispatch => ({
  handleDeleteProduct(payload) {
    dispatch(deleteProduct(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);


// import React, {useState, useEffect} from "react";
// // react plugin used to create charts
// import { Line, Pie } from "react-chartjs-2";
// // reactstrap components
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   Row,
//   Col
// } from "reactstrap";
// // core components
// import {
//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
//   dashboardNASDAQChart
// } from "variables/charts.jsx";
// import ProductItem from "./productItem";
// import axios from 'axios';

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       products: [],
//       isLoading: true,
//       errors: null,
//       total: 0,
//       page: '' || 1
//     };
//   }

//   componentDidMount() {
//     let data = [
//       localStorage.getItem('search'), 
//       localStorage.getItem('by'),
//       localStorage.getItem('type'),
//       localStorage.getItem('page')
//     ];  

//     const products = this.getProducts(data);
//       this.setState({
//         products, 
//      });
//      localStorage.removeItem('search');
//      localStorage.removeItem('by');
//      localStorage.removeItem('type');
//   }

//   handlerChange = (e) => {
//     this.setState({ [e.target.name] : e.target.value })
//     localStorage.setItem('setPage', this.state.page);
//     localStorage.getItem('setPage');
    
//   }

//   getProducts(data) {
//     const whatSearch = '?name='+data[0];
//     const searchValue = data[0] !== null ? whatSearch : '?name=';

//     const type = data[2] === null ? 'ASC' : data[2];
    
//     const orderBy = data[1] !== null ? '&by='+data[1]+'&type='+type : '&by=pId&type=ASC';

//     const page = '&page='+data[3];

//     const queryView = 'http://localhost:8000/products' + searchValue + orderBy + page;
//     axios
//     // .get("https://randomproduct.me/api/?results=5")
//     .get(queryView)
//     .then(response =>
//       response.data.values.map(product => ({
//         id: `${product.pId}`,
//         name: `${product.pName}`,
//         description: `${product.pDesc}`,
//         quantity: `${product.pQty}`,
//         image: `${product.pImage}`,
//         idCategory: `${product.idCategory}`,
//         category: `${product.category}`,
//         dateAdded: `${product.pDateAdded}`,
//         dateUpdated: `${product.pDateUpdated}`
//       }))
//     )
//     .then(products => {
//       this.setState({
//         products,
//         isLoading: false
//       })
//     })
 
//     .catch(error => this.setState({ error, isLoading: false }));
//   }
  
//   render() {
//     const { isLoading, products } = this.state;

//     return (
//       <>
//         <div className="content">
//           <Row>
//             <Col lg="12" md="12" sm="12">
//               <div className="Product justify-content-end text-center">
//               <h1>List Products</h1>
//               {!isLoading ? (
//                 products.map(product => {         
//                   return (
//                   <ProductItem
//                     key={product.name}
//                     {...product}
//                   />
//                   );
//                 })
//               ) : (
//                 <h1>Loading...</h1>
//               )}
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </>
//     );
//   }
// }

// export default Dashboard;