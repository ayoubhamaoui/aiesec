import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items:[],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c')
      .then(res => res.json())
      .then(json => this.setState({ 
        isLoaded: true,
        items: json,
       }));
  }

  render() {
    var { isLoaded, items }=this.state;
  
    if(!isLoaded){
      return <div>Loading....</div>
    }
    return (
      <div className="App">
      <ul>
        {
          items.data.map(item=>(
            <li key={item.id}>
              {item.title}
            </li>
          ))
        };
      </ul>
        
      </div>
    );
  }
}

export default App;
