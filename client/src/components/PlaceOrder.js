import React from 'react'
import { Table, 
	Container, 
	Button, 
	Grid,
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getItems } from '../reducers/items'
import Order from './Order'

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
				<Table basic="very">
					<Table.Header>
						<Table.HeaderCell>Menu</Table.HeaderCell>
					</Table.Header>
	    		<Table.Body>
	    			{ this.listItems() }
	    		</Table.Body>
				</Table>
				{ this.state.cart.length > 0 ? 
					<Order cart={this.state.cart} />
					:
					null
				}
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