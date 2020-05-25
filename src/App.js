import React, { Component } from 'react';

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
          <h1>VERSE OF THE DAY</h1>
          
          <div>
            <p>{item.verse.details.text}</p>
          </div>
          <div>
            - {item.verse.details.reference}
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="10">how are you feeling today after reading this verse? enter it here and click save button to save into your own database</textarea>
          </div>
          <div>
            <button>SAVE</button>
          </div>
        </div>
        
      );
    }
  }


  
}
export default App;