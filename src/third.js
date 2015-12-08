import React, {Component} from 'react';

export default class Third extends Component {

	constructor (props) {
		super(props);

        this.state = {
            list: <p>{this.props.collection}</p>
        };
	}

	clickHandler(e) {
		const {collection} = this.props;
		var search = this._input.value;

		this.setState({
			list: this.highlightPosition(collection, search)
		})
	}

	highlightPosition(list, search){
		var index = list.indexOf(search);

		if(index < 0)
			return <p>{list}</p>

		var before = list.substr(0, index);
		var after = list.substr(index + search.length, list.length);

		return 	<p>
					{before}<strong>{search}</strong>{after}
				</p>;
	}

	render() {
		var {list} = this.state;
		
		return (
			<div>
				<h2>Third question</h2>

				<input type="text" ref={(c) => this._input = c} />
				<button onClick={this.clickHandler.bind(this)}>Search</button>

				{list}

			</div>
		);
	}
}