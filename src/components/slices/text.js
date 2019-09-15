import React from 'react';
import { connect } from 'react-redux';

import {RichText} from 'prismic-reactjs';



const Text =({slice, linkResolver}) => (
		<div className="post-part single container">
			<div>
				{RichText.render(slice.primary.text, linkResolver)}
			</div>
		</div>	
)

const mapStateToProps = state => ({
   linkResolver: state.prismic.linkResolver,
  });
  
  const mapDispatchToProps = dispatch => ({
  });
  

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Text);
