import React,{Component} from 'react';
import './App.css';
import DisplayComponent from './components/DisplayComponent';
import KeyPadComponent from './components/KeyPadComponent';
class App extends Component{
  constructor(){
    super();

    this.state={
      result : ""
    }
  }

  onClick = (button) =>{
    if(button === "="){
      this.calculate();
    }
    else if(button ==="C" || this.state.result==="ERROR"){
      this.reset();
    }
    else if (button ==="CE"){
      this.bkspc();
    }
    else{
      this.setState({
        result : this.state.result + button
      })
    }
  };

  calculate = () =>{
    try{
      this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
    }catch(e) {
      this.setState({
        result:"ERROR"
      })
    }
  };

  reset = () =>{
    this.setState({
      result : ""
    })
  };

  bkspc = () =>{
    this.setState({
      result : this.state.result.slice(0,-1)
    })
  };

  render(){
    return (
      <div>
          <h1>Simple Calculator</h1>
          <div className="calculator">
          <DisplayComponent result={this.state.result}/>
          <KeyPadComponent onClick={this.onClick}/>
          </div>
        </div>

  );
  }
}

export default App;
