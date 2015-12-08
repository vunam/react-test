import React, {Component} from 'react';

export default class Table extends Component {

	render() {
		var {numbers} = this.props;

		return (
			<table>
				<tbody>
					<tr>
						{numbers.map(function(val, i) {
		                	return <td key={i}>{val}</td>;
		              	})}
					</tr>
				</tbody>
			</table>
		);
	}
}

export default class Second extends Component {

	constructor () {
		super()
        this.state = {
            numbers: [],
            display: false
        };
	}

	render() {
		var {numbers, display, consecutive} = this.state;
		var showTable = (numbers.length) ? <Table numbers={numbers} /> : "Fill in the numbers";
		var message;

		if(display)
			message = (consecutive) ? "This table is consecutive." : "This table is not consecutive.";
		
		return (
			<div>
				<h2>Second question</h2>

				<p>
					<input type="text" ref={(c) => this._input = c} />
					<button onClick={this.clickHandler.bind(this)}>Add number</button>
					<button onClick={this.checkHandler.bind(this)}>Check</button>
				</p>

				{showTable}
			
				<p>{message}</p>
			</div>
		);
	}
	
	clickHandler(e) {
		var {numbers} = this.state;
		var val = parseInt(this._input.value);

		this._input.value = "";

		//We should validate...
		numbers.push(val);

		this.setState({
			numbers: numbers,
			display: false
		})
	}
	
	checkHandler(e) {
		var {numbers} = this.state;
		var display = (numbers.length > 1);
	
		this.setState({
			numbers: numbers,
			display: display,
			consecutive: this.calculateConsecutive(numbers)
		});
	}

	calculateConsecutive(arr) {
		var len = arr.length;
		if (len < 2)
			return false;

		//Needed since this is also consecutive: 12 14 16 18 or 3 2 1
		var step = arr[1] - arr[0];

		for (var i = 1; i < len; i++) {
	      if(!this.checkConsecutive( arr[i -1], arr[i], step ))
	      	return false; 
	    }

	    return true;
	}

	checkConsecutive(a, b, step){
		if(b - a == step) 
			return true;
		
		return false;
	}
}