import React from 'react';
import ReactDOM from 'react-dom';
import First from './first';
import Second from './second';
import Third from './third';

ReactDOM.render(
	<div>
		<First numberString='1,2,4,7,1,6,2,8' />
		<Second />
		<Third collection='| asarotum | boris | disentranced | dispread | fluctuation | irremeable | men | noncoloring | reverential | unseignorial |' />
	</div>
	,document.getElementById('content'));