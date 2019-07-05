import React from 'react';
import {RichText} from 'prismic-reactjs';
import { connect } from 'react-redux';

import Loader from '../Loader';
import NotFound from '../NotFound';


const Home = ({loading, failed, imageUrl, headline, description}) => {
    if (loading) {
        return <Loader />
    }

    if (failed) {
        return <NotFound />
    }

    const avatar = {backgroundImage: 'url(' + imageUrl +')'};
    return (
        <div className="home">
            <div className="blog-avatar" style={avatar}>
            </div>
            <h1 className="blog-title">{RichText.asText(headline)}</h1>
            <p className="blog-description">{RichText.asText(description)}</p>
        </div>
    );
}

const mapStateToProps = state => ({
    loading: state.home.loading,
    failed: state.home.failed,
    imageUrl: state.home.imageUrl,
    headline: state.home.headline,
    description: state.home.description,
  });
  
  const mapDispatchToProps = dispatch => ({
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);
