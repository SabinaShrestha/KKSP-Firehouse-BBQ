import React, { Component } from 'react';
import { Header, Image, Segment, Divider, Grid } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import darthvader from '../assets/images/darthvader.png'

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
            Not Your Father's BBQ
          </Header>
        </Segment>
        <Grid>
          <Grid.Column 
            computer={8} 
            tablet={8} 
            mobile={16}>
            <Segment inverted>
            <Link to='/login'>
                  <Header
                    as='h3'
                    textAlign='center'
                    style={styles.header}>
                  <Menu.Item name='login' />
                  </Header>  
                </Link>
              <Divider />
            </Segment>
          </Grid.Column>
          <Grid.Column 
            computer={8} 
            tablet={8} 
            mobile={16}>
            <Segment inverted>
              <Link to='/about'>
                  <Header
                    as='h3'
                    textAlign='center'
                    style={styles.header}>
                  <Menu.Item name='About Us' />
                  </Header>  
                </Link>
              <Divider />
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid.Column 
            computer={8} 
            tablet={8} 
            mobile={16}>
        <Segment invert>
            <div
            align='center'
            style={styles.header}
            weidth='800'px
            height='800px'
            >
          <Image src={darthvader}/>
            </div>
      
        </Segment>
        </Grid.Column>
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
