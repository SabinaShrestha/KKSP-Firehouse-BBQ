import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../reducers/items';
import { Form, Button } from 'semantic-ui-react';
import { CommonButton } from './styles/CommonStyles'

class ItemForm extends React.Component {
  initialState = {
    name: '',
    price: '',
    category: '',
  }

  state = { ...this.initialState }

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const item = { ...this.state }
    const { toggleForm, dispatch } = this.props
    dispatch(addItem(item))
    this.setState({ ...this.initialState })
    toggleForm()
  }

  render() {
    const {
      name,
      price,
      category
    } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          placeholder="name"
          value={name}
          onChange={this.handleChange}
          label="name"
          required
        />
        <Form.Input
          name="price"
          placeholder="price"
          value={price}
          onChange={this.handleChange}
          label="price"
          required
        />
        <Form.Field
          name="category"
          placeholder='category'
          label="category"
          onChange={this.handleChange}
          required
        >
          <option> Category </option>
          <option value={"Sandwiches"}>Sandwiches</option>
          <option value={"Sides"}>Sides</option>
          <option value={"Salads"}>Salads</option>
          <option value={"Sampler"}>Sampler</option>
          <option value={"Ribs"}>Ribs</option>
          <option value={"Drinks"}>Drinks</option>
        </Form.Field>

        <CommonButton type='submit'>Save</CommonButton>
        <Button type='button' onClick={this.props.toggleForm}>cancel</Button>
      </Form>
    )
  }
}

export default connect()(ItemForm)
