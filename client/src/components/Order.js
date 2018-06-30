import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Order extends React.Component {

	showOrder = () => {
		const { cart } = this.props
		return cart.map( item => {
			return (
				<Table.Row key={item.id}>
        	<Table.Cell>{item.name}</Table.Cell>
        	<Table.Cell>{item.price}</Table.Cell>
        </Table.Row>	
			)
		})
	}

	sumOrder = () => {
		const { cart } = this.props
		const prices = []
		cart.map ( item => {
			prices.push(item.price)
		})
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return prices.reduce(reducer)
	}

	render() {
		return (
			<Container>
				<Table basic="very">
					<Table.Header>
						<Table.Row>
		    			<Table.HeaderCell colSpan='3'>Your Order</Table.HeaderCell>
		    		</Table.Row>
		    	</Table.Header>
		    		<Table.Body>
		    			{ this.showOrder() }
		    			<Table.Row>
		    				<Table.Cell>
		    					total
		    				</Table.Cell>
		    				<Table.Cell>
		    					{ this.sumOrder() }
		    				</Table.Cell>
		    			</Table.Row>
		    		</Table.Body>
				</Table>
				<Button><Link to='/checkout'>Checkout</Link></Button>
			</Container>
		)
	}
}

export default Order;