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
            sets: ['','','']
        };
	}

    componentWillMount() {
    	var numArr = this.state.numberString.split(",").map(
    		function(val){ 
    			return parseInt(val); 
    		});

        this.calculateTotal( numArr );
    }

	render() {

		var {numberString, sets} = this.state;

		return (
			<div>
				<h2>First question</h2>

				{numberString} <br/>

				{sets.map(function(val, i) {
                	return <Set number={val} key={i} />;
              	})}
			</div>
		);
	}

    calculateTotal(numArr) {
    	var zeroArr = [0,0,0],
    		{sets} = this.state;
    	
    	numArr = numArr.sort(function(a, b){return b-a});

    	this.addToLowestSet(numArr, zeroArr, sets);
    }

    addToLowestSet(a, z, s){
    	if(a.length < 1)
			return s;
    	
		var index = z.indexOf(Math.min.apply(Math, z));
		z[index] = z[index] + a[0];
		s[index] = s[index] + a[0]+ ",";
		a.shift();
		this.addToLowestSet(a, z, s);
    }

}