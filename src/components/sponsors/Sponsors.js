import React from 'react';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import Loader from '../misc/Loader';
import NotFound from '../NotFound';


// import Text from '../slices/text';
// import Quote from '../slices/quote';
// import ImageCaption from '../slices/imageCaption';


const renderSliceZone = (sliceZone) => sliceZone.map((slice) => (
  <div>
    <h3 className="sponsor-title">{RichText.render(slice.primary.sponsor_name)}</h3>
    <Grid columns={2}>
      <Grid.Column width={5}>
        <div className="sponsor-img">
          <img src={slice.primary.sponsors_image.url} alt={slice.primary.sponsors_image.alt} />
        </div>
      </Grid.Column>
      <Grid.Column width={11}>
        <p>{RichText.render(slice.primary.sponsor_description)}</p>
      </Grid.Column>
    </Grid>
    <hr />
  </div>
));

const Sponsors = ({
  loading,
  failed,
  title,
  description,
  sliceZone,
}) => {
  if (loading) {
    return <Loader />;
  }

  if (failed) {
    return <NotFound />;
  }
  return (
    <div className="sponsor">
      <h1 className="sponsor-title">{RichText.render(title)}</h1>
      <p className="sponsor-description">{RichText.render(description)}</p>
      <hr />
      {renderSliceZone(sliceZone)}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.sponsors.loading,
  failed: state.sponsors.failed,
  title: state.sponsors.title,
  description: state.sponsors.description,
  sliceZone: state.sponsors.body,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sponsors);
