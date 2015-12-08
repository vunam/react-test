import React from 'react';
import ReactDOM from 'react-dom';
import First from './first';
import Second from './second';

ReactDOM.render(
	<div>
		<First numberString='1,2,4,7,1,6,2,8' />
		<Second />
	</div>
	,document.getElementById('content'));