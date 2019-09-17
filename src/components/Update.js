import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UpdateProductContainer from '../containers/UpdateProductContainer'
import Title from './Title'
import glamorous from 'glamorous'
import variables from '../styles/variables'

const StyledEditForm = glamorous.div('x', props => {
  const visibility = props.visible ? 'block' : 'none'
  return {
    border: `1px solid ${variables.grey}`,
    backgroundColor: variables.background,
    margin: '10px 0',
    padding: 10,
    display: visibility
  }
})

class Update extends Component {
  static propTypes = {
    pId: PropTypes.number.isRequired,
    pName: PropTypes.string.isRequired,
    pDesc: PropTypes.string.isRequired,
    pQty: PropTypes.number.isRequired,
    pImage: PropTypes.string.isRequired,
    idCategory: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    pDateAdded: PropTypes.string.isRequired,
    pDateUpdated: PropTypes.string.isRequired
  }

  state = {
    visibleEditForm: false
  }

  handleClick = () => {
    this.setState(prevState => {
      return { visibleEditForm: !prevState.visibleEditForm }
    })
  }

  _hideUpdateForm = () => {
    this.setState({ visibleEditForm: false })
  }

  render() {
    return (
      <div>
        <StyledEditForm visible={this.state.visibleEditForm}>
          <Title key="title">Update Product</Title>
          <UpdateProductContainer
            {...this.props}
            onUpdateSuccess={this._hideUpdateForm}
          />
        </StyledEditForm>
        <button onClick={this.handleClick} className="btn btn-primary">Update</button>
      </div>
    )
  }
}

export default Update
