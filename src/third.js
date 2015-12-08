import React, {Component} from 'react';

export default class Third extends Component {

	constructor (props) {
		super(props);

        this.state = {
            list: this.props.collection}
        };
	}

	onClickSearch(e) {
		const {list} = this.state;
		var search = this._input.value;

		var index = list.indexOf(search);
		
	}


	render() {
		var {list} = this.state;
		
		return (
			<div>
				<h1>Third question</h1>

				<input type="text" ref={(c) => this._input = c} />
				<button onClick={this.onClickSearch}>Search</button>
				<p>
					{list}
				</p>

			</div>
		);
	}
}