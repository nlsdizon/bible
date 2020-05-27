import React, { Component } from 'react'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://beta.ourmanna.com/api/v1/get/?format=json&order=random')
    .then( res => res.json())
    .then( json => {
        this.setState({
          isLoaded: true,
          item: json,
        })
    });
  }

  render() 
  {
    var { isLoaded, item } = this.state;

    if(!isLoaded)
    {
      return(
        <div className="a"> loading . . . </div>
      );
    }
    else
    {
      return(
        <div>
        <div className="container">
          <h1 className="title">VERSE OF THE DAY</h1>
          <div className="verse">
            <p>{item.verse.details.text}</p>
          </div>
          <div className="book">
            - {item.verse.details.reference}
          </div>
          <div className="txt">
            <textarea name="" id="" cols="30" rows="10">how are you feeling today after reading this verse? enter it here and click save button to save into your own database</textarea>
          </div>
          <div>
            <button>SAVE</button>
          </div>
        </div>
        </div>
        
      );
    }
  }


  
}
export default App;