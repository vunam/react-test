import React, {Component} from 'react';

export default class Set extends Component {
	render() {
		return (
			<div>
				{this.props.number}
			</div>
		);
	}
}

export default class First extends Component {

	constructor (props) {
		super(props);
        this.state = {
            numberString: props.numberString,
            sets: [0,0,0]
        };
	}

    componentWillMount() {
    	var numArr = this.props.numberString.split(",");
        this.calculateTotal( numArr );
    }

	render() {

		var {numberString, sets} = this.state;

		return (
			<div>
				<h1>First question</h1>

				{numberString} <br/>

				{sets.map(function(val, i) {
                	return <Set number={val} key={i} />;
              	})}
			</div>
		);
	}

    calculateTotal() {
    	//add to lowest set number with recursion
    }

}