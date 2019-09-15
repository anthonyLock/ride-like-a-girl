import React from 'react';
import {RichText} from 'prismic-reactjs';


const Quote =({slice}) => (
	<div className="post-part single container">
		<span className="block-quotation">
			{RichText.render(slice.primary.quote)}
		</span>
	</div>
)

export default Quote