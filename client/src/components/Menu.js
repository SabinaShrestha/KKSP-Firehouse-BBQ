import React from 'react';
import { 
	Table,
	Container, 
} from 'semantic-ui-react';

class Menu extends React.Component {
	state = { 
		items: [
			{ name: 'pulled pork', price: 8, category: 'sandwiches' },
			{ name: 'mango pulled pork', price: 9, category: 'sandwiches' },
			{ name: 'bbq chicken', price: 8, category: 'sandwiches' },
			{ name: 'beef brisquet', price: 8, category: 'sandwiches' },
			{ name: 'potato salad', price: 1, category: 'sides' },
			{ name: 'can', price: 1, category: 'sodas' },
			{	name:	'Beans (BBQ or Vegetarian)', price: 1, category: 'sides'},
			{ name: 'Potato Salad', price: 1, category: 'sides' },
			{ name: 'Collard Greens', price: 1, category: 'sides' },
			{ name: 'Sticky Rice', price: 1, category: 'sides' },
			{ name: 'Coleslaw', price: 1, category: 'sides' },
			{ name: 'Cornbread', price: 1, category: 'sides' },
		]
	}

	listItems = () => {
		const { items } = this.state
		return items.map ( item => {
			return (
			 <Table.Row>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.price}</Table.Cell>
      </Table.Row>
      )
		})
	}

	listByFilter = (filter) => {
		const { items } = this.state
		const filtered = items.filter ( item => item.category === filter)
		return filtered.map ( food => {
			return (
				<Table.Row>
					<Table.Cell>{food.name}</Table.Cell>
					<Table.Cell>${food.price}</Table.Cell>
				</Table.Row>
			)
		})
	}

	render() {
		return(
			<Container>
				<Table basic="very">
					<Table.Header>
						<Table.Row>
	    				<Table.HeaderCell colSpan='3'>Menu</Table.HeaderCell>
	    			</Table.Row>
	    		</Table.Header>
	    		<Table.Body>
	    			<Table.Row>
	    				<Table.HeaderCell colSpan='3'>Sandwiches</Table.HeaderCell>
	    			</Table.Row>
	    				{ this.listByFilter('sandwiches') }
	    			<Table.Row>
	    				<Table.HeaderCell colSpan='3'>Sides</Table.HeaderCell>
	    			</Table.Row>
	    				{ this.listByFilter('sides') }
	    			<Table.Row>
	    				<Table.HeaderCell colSpan='3'>Drinks</Table.HeaderCell>
	    			</Table.Row>
	    				{ this.listByFilter('sodas') }
	    		</Table.Body>
				</Table>
			</Container>
		)
	}
}

export default Menu;