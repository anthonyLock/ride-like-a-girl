import React from 'react';
import {RichText} from 'prismic-reactjs';

const defaultView = (slice) => {
	return (
		<div className="post-part single container">
			<div className="block-img">
				<img src={slice.primary.image.url} alt={slice.primary.image.alt} />
				{ RichText.render(slice.primary.caption) !== ""
					? <p><span className="image-label">
						{RichText.render(slice.primary.caption)}
						</span></p>
					: null
				}
			</div>
		</div>
	);
}

const emphasized = (slice) => {
	return (
		<div className="post-part single container">
			<div className="block-img emphasized">
				<img src={slice.primary.image.url} alt={slice.primary.image.alt} />
				{ RichText.render(slice.primary.caption) !== ""
					? <p><span className="image-label">
						{RichText.render(slice.primary.caption)}
						</span></p>
					: null
				}
			</div>
		</div>
	);
}

const imageFullWidth = (slice) => {
	return (
		<div className="blog-header single"
		style={{backgroundImage: 'url('+ slice.primary.image.url +')'}}>
			<div className="wrapper">
				{ RichText.render(slice.primary.caption) !== ""
					? <div>{RichText.render(slice.primary.caption)}</div>
					: null
				}
			</div>
		</div>
	);
}


const ImageCaption = ({slice}) => {
	switch(slice.slice_label) {
		case "image-full-width":
			return imageFullWidth( slice )
		case "emphasized":
			return emphasized( slice )
		default:
			return defaultView( slice )
	}
}

export default ImageCaption;