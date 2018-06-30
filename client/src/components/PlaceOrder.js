import React from 'react'
import { Table, 
	Container, 
	Button, 
	Grid,
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getItems } from '../reducers/items'
import Order from './Order'
import { Link } from 'react-router-dom';
import Checkout from './Checkout'

class PlaceOrder extends React.Component {
	state = { cart: [] }

	componentDidMount() {
		this.props.dispatch( getItems() )	
	}

	addToCart = (item) => {
		const { cart } = this.state
		this.setState({ cart: [...cart, item] })
	}
	
	listItems = () => {
		return this.props.items.map ( item => {
			return (
			 <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.price}</Table.Cell>
        <Table.Cell>
        	<Button onClick={() => this.addToCart(item)}>
        		Add to Cart
        	</Button>
        </Table.Cell>
      </Table.Row>
      )
		})
	}

	render () {
		return (
			<Container>
				{ this.state.cart.length > 0 ?
					<Order cart={this.state.cart} />
					:
					null
				}
				<Table basic="very">
					<Table.Header>
						<Table.HeaderCell>Menu</Table.HeaderCell>
					</Table.Header>
	    		<Table.Body>
	    			{ this.listItems() }
	    		</Table.Body>
				</Table>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	const { items, user } = state
	return {
		items,
		user
	}
}

export default connect(mapStateToProps)(PlaceOrder);