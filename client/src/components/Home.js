import React, { Component } from 'react';
import { Header, Segment, Divider, Grid } from 'semantic-ui-react';


class Home extends Component {
  
  render() {
    return (
      <Segment basic>
        <Segment 
          basic 
          textAlign='center'>
          <Header 
            as='h1' 
            textAlign='center'
            style={styles.header}>
            BUBBA'S BBQ
          </Header>
        </Segment>
        <Grid>
          <Grid.Column 
            computer={8} 
            tablet={8} 
            mobile={16}>
            <Segment inverted>
              <Header
                as='h2'
                textAlign='center'
                style={styles.header}>
                Welcome
              </Header>
              <Divider />
            </Segment>
          </Grid.Column>
          <Grid.Column 
            computer={8} 
            tablet={8} 
            mobile={16}>
            <Segment inverted>
              <Header
                as='h2'
                textAlign='center'
                style={styles.header}>
                Menu
              </Header>
              <Divider />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#ff1a1a',
  },
  background: {
    backgroundColor: '#000000',
    },
}


export default Home;
