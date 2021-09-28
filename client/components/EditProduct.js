import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../store/productsReducer';
class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: ''
      //could add imageURL later
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidUpdate(prevProps) {
  if (prevProps.product.id !== this.props.product.id) {
    this.setState({
      name: this.props.product.name || '',
      address: this.props.product.description || '',
      price: this.props.product.price || ''
    });
  }
}

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editProduct({ ...this.props.product, ...this.state });
  }


  render(){
    console.log('this is state', this.state)
    const { name, description, price } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="updateProduct-form" onSubmit={handleSubmit}>
        <label htmlFor="name"> Name:</label>
        <input name="name" onChange={handleChange} value={name} />

        <label htmlFor="description">Description:</label>
        <input name="description" onChange={handleChange} value={description} />

        <label htmlFor="price">Price:</label>
        <input name="price" onChange={handleChange} value={price} />

        <button type="submit"> Update</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {product: state.singleProduct}
};

const mapDispatchToProps = (dispatch) => ({
  editProduct: (product) => dispatch(updateProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);


