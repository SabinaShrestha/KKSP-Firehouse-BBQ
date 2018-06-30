import React from 'react'
import { Form, Button, Container } from 'semantic-ui-react'

class Checkout extends React.Component {
	render () {
		return(
			<Container>
			<Form>
	    	<Form.Field>
	      	<label>First Name</label>
	      	<input placeholder='First Name' />
	    	</Form.Field>
	    	<Form.Field>
	      	<label>Last Name</label>
	      	<input placeholder='Last Name' />
	    	</Form.Field>
	    	<Form.Field>
	      	<label>Credit Card</label>
	      	<input placeholder='Card Number' />
	    	</Form.Field>
	    	<Form.Field>
	      	<label>CVV</label>
	      	<input placeholder='CVV' />
	    	</Form.Field>
	    	<Form.Field>
	      	<label>Zip Code</label>
	      	<input placeholder='Zip Code' />
	    	</Form.Field>
	    	<Form.Field>
	      	<label>Expiration</label>
	      	<input placeholder='Expiration' />
	    	</Form.Field>
	    	<Button type='submit'>Submit</Button>
  		</Form>
  		</Container>
		)
	}
}

export default Checkout;