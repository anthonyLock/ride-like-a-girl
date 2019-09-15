import React from 'react';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';

import Loader from '../misc/Loader';
import NotFound from '../NotFound';


import Text from '../slices/text';
import Quote from '../slices/quote';
import ImageCaption from '../slices/imageCaption';


const renderSliceZone = (sliceZone) => sliceZone.map((slice) => {
  switch (slice.slice_type) {
    case ('image_with_caption'):
      return <ImageCaption slice={slice} />;
    case ('quote'):
      return <Quote slice={slice} />;
    case ('text'):
      return <Text slice={slice} />;
    default:
      return null;
  }
});

const About = ({
  loading,
  failed,
  title,
  sliceZone,
}) => {
  if (loading) {
    return <Loader />;
  }

  if (failed) {
    return <NotFound />;
  }

  return (
    <div className="home">
      <h1 className="blog-title">{RichText.render(title)}</h1>
      {renderSliceZone(sliceZone)}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.about.loading,
  failed: state.about.failed,
  title: state.about.title,
  sliceZone: state.about.body,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
