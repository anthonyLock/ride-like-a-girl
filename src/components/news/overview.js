/* eslint-disable react/no-array-index-key */
import React from 'react';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


import Loader from '../misc/Loader';
import NotFound from '../NotFound';


const renderSliceZone = (items) => items.map((item, index) => (
  <Link to={`/news/${item.uid}`} key={`slice-${index}`}>
    <div>
      <h3 className="news-ov-item-title">{RichText.render(item.data.title)}</h3>
      <Grid columns={2}>
        <Grid.Column width={5}>
          <div className="news-ov-item-img">
            <img src={item.data.overview_image.url} alt={item.data.overview_image.alt} />
          </div>
        </Grid.Column>
        <Grid.Column width={11}>
          <div>{RichText.render(item.data.overview)}</div>
        </Grid.Column>
      </Grid>
      <hr />
    </div>
  </Link>
));


const Overview = ({
  loading,
  failed,
  title,
  description,
  items,
}) => {
  if (loading) {
    return <Loader />;
  }

  if (failed) {
    return <NotFound />;
  }

  return (
    <div className="news">
      <div className="news-title">{RichText.render(title)}</div>
      <div className="news-description">{RichText.render(description)}</div>
      <hr />
      {renderSliceZone(items)}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.newsOverview.loading,
  failed: state.newsOverview.failed,
  title: state.newsOverview.title,
  description: state.newsOverview.description,
  items: state.newsOverview.items,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Overview);
