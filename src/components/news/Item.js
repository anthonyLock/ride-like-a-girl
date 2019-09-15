/* eslint-disable react/no-array-index-key */
import React from 'react';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';

import Loader from '../misc/Loader';
import NotFound from '../NotFound';


import ImageCaption from '../slices/imageCaption';


const renderSliceZone = (sliceZone, linkResolver) => sliceZone.map((slice, index) => {
  switch (slice.slice_type) {
    case ('image_with_caption'):
      return <ImageCaption slice={slice} />;
    case ('text'):
      return (
        <div key={`slice-${index}`}>
          {RichText.render(slice.primary.text, linkResolver)}
        </div>
      );
    default:
      return null;
  }
});

const About = ({
  loading,
  failed,
  title,
  sliceZone,
  linkResolver,
}) => {
  if (loading) {
    return <Loader />;
  }

  if (failed) {
    return <NotFound />;
  }

  return (
    <div className="news-item">
      <div className="news-item-title">{RichText.render(title)}</div>
      {renderSliceZone(sliceZone, linkResolver)}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.newsItem.loading,
  failed: state.newsItem.failed,
  title: state.newsItem.title,
  sliceZone: state.newsItem.body,
  linkResolver: state.prismic.linkResolver,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
