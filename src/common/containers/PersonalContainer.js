import React, { Component } from 'react';
import Helmet from 'react-helmet';


class Home extends Component {
  constructor(props){
    super(props);
  }

    render() {
        return (
            <div>
              {!this.props.children && <div>YO, Go out!</div>}
              {this.props.children}
            </div>
        );
    }
}

export default Home;
