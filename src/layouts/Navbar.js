import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Dropdown
} from 'reactstrap';
  import CreateProductContainer from '../containers/CreateProductContainer'
  import Product from '../components/Product'
  import Main from './Main';
  import AuthHelperMethods from '../components/auth/AuthHelperMethods';
  import {confirmAlert} from 'react-confirm-alert';
  import 'react-confirm-alert/src/react-confirm-alert.css';

export default class Navbars extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      search: "",
      by: ""
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }
  
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  sort = (e) => {
    let byWhat = e.target.name;
    let splited = byWhat.split('_')
    let by = splited[0];
    let type = splited[1];
    localStorage.setItem('by', by);
    localStorage.setItem('type', type);
    document.location.href='/';
  }

  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    document.location.href='/';
  }

  logoutConfirm = () =>  {
    confirmAlert({
      title: 'Confirmation',
      message: `Are you sure want to logout ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this._handleLogout()
        },
        {
          label: 'No',
          onClick: () => {} 
        }
      ]
    })
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handlerPage = (e) => {
    this.setState({ [e.target.name] : e.target.value });
    localStorage.setItem('page', e.target.value);
    document.location.href='/';
  }

  searchProduct = (e) => {
    localStorage.setItem('search', this.state.search);
  } 

  render() {
    return (
        <Router>
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Inventory App</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <div className="col-2">
                  <select defaultValue="Select Page" className="form-control btn btn-success" name="page" onChange={this.handlerPage}>
                    <option disabled name="null">Select Page</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                    <Nav className="ml-auto" navbar>
                    <form onSubmit={this.searchProduct}>
                      <InputGroup className="no-border">
                        <Input type="text" placeholder="Search Product..." name="search" onChange={this.handlerChange} autoComplete="off" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="nc-icon nc-zoom-split" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </form>
                    <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={e => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  Sort By
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" name="pName_ASC" onClick={this.sort}>Name (Ascending)</DropdownItem>
                  <DropdownItem tag="a" name="pName_DESC" onClick={this.sort}>Name (Descending)</DropdownItem>
                  <DropdownItem tag="a" name="pCategory_ASC" onClick={this.sort}>Category (Ascending)</DropdownItem>
                  <DropdownItem tag="a" name="pCategory_DESC" onClick={this.sort}>Category (Descending)</DropdownItem>
                  <DropdownItem tag="a" name="pQty_ASC" onClick={this.sort}>Quantity (Ascending)</DropdownItem>
                  <DropdownItem tag="a" name="pQty_DESC" onClick={this.sort}>Quantity (Descending)</DropdownItem>
                  <DropdownItem tag="a" name="pDateUpdated_ASC" onClick={this.sort}>Date Updated (Ascending)</DropdownItem>
                  <DropdownItem tag="a" name="pDateUpdated_DESC" onClick={this.sort}>Date Updated (Descending)</DropdownItem>
                </DropdownMenu>
              </Dropdown>
                    <NavItem>
                        <Link to="/product">
                            <NavLink>Product</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/addProduct">
                            <NavLink>Add Product</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="#" className="nav-link btn-rotate" onClick={this.logoutConfirm}>
                        <i className="nc-icon nc-button-power" /> LOGOUT
                        <p>
                          <span className="d-lg-none d-md-block">Account</span>
                        </p>
                      </Link>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
                <Main>
                  <Route path="/addProduct" component={CreateProductContainer} />
                  <Product />
                </Main>
            </div>
            
        </Router>


        
     
    );
  }
}

     {/* <Router>
         <div className="container-fluid home">
           <ul>
             <li className="navbar">
               <Link to="/login" className="link">Sign in</Link>
             </li>
             <li className="navbar">
               <Link to="/signup" className="link">Sign up</Link>
             </li>
           </ul>
            <hr/>
            <h1 className="title">Welcome to inventory application please login.</h1>
         
          </div>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
       </Router> */} 