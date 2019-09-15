import React from 'react';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import Loader from '../misc/Loader';
import NotFound from '../NotFound';


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
      <div className="sponsor-title">{RichText.render(title)}</div>
      <div className="sponsor-description">{RichText.render(description)}</div>
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
