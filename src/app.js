import React from 'react';
import ReactDOM from 'react-dom';
import First from './first';

ReactDOM.render(
	<div>
		<First numberString='1,2,4,7,1,6,2,8' />
	</div>
	,document.getElementById('content'));