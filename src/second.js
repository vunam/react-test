import React, {Component} from 'react';

export default class Second extends Component {

	constructor (props) {
		super(props);

        this.state = {
            numbers: []
        };
	}
	
	onClickAdd(e) {
		this._input;
		var {numbers} = this.state;
		var value = this._input.value;

		numbers.push(parseInt(value));

		this.setState({
			numbers: numbers
		})

		this._input.value = "";
	}

	render() {

		var {numbers} = this.state;

		return (
			<div>
				<h1>Second question</h1>

				<input type="text" ref={(c) => this._input = c} />

				<button onClick={this.onClickAdd.bind(this)}>Add number</button>
				<button>Check</button>
		
				{numbers}

			</div>
		);
	}

}