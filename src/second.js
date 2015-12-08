import React, {Component} from 'react';

export default class Table extends Component {

	render() {
		var {numbers} = this.props;

		return (
			<table>
				<tbody>
					<tr>
						<td>
		              	</td>
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
		
		this._input.value = "";

		numbers.push(parseInt(value));


		this.setState({
			numbers: numbers
		})

	}

	render() {

		var {numbers} = this.state;

		var showTable = (numbers.length) ? <Table numbers={numbers} /> : "fill in the numbers";
		
		return (
			<div>
				<h1>Second question</h1>

				<input type="text" ref={(c) => this._input = c} />

				<button onClick={this.onClickAdd.bind(this)}>Add number</button>
				<button>Check</button>
		
				{showTable}

			</div>
		);
	}

}