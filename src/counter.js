
import React from 'react' ;

export default class Counter extends React.Component{
	constructor(props){
			super(props);

			this.state = {
				value: 0}
}
 handlePlusClick= () =>{
		this.setState({
			value: this.state.value +1})
}
 handleMinusClick= () =>{
		this.setState({
			value: this.state.value - 1})
}

		render(){
			return(
			<div>
				<div>{this.props.title}</div>
				<button onClick={this.handleMinusClick}>-</button>
				<div>{this.state.value}</div>
				<button onClick={this.handlePlusClick}>+</button>
			<hr/>
  			 </div>
);
}
}
