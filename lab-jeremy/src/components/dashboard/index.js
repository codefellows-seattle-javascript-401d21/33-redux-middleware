import React from 'react';
import {connect} from 'react-redux';
import {
  seasonFetchRequest,
  seasonCreateRequest} from '../../actions/season-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchSeasons();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Hello world - League of Legends things</h1>

        {this.props.seasons ?
          this.props.seasons.map(season =>
            <div key={season._id}>
              {/* <span onClick={() => this.props.deleteSeason(season)}>x</span> */}
              <p>{season.name}</p>
            </div>)
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  seasons: state.seasons,
});

let mapDispatchToProps = dispatch => ({
  fetchSeasons: () => dispatch(seasonFetchRequest()),
  createSeason: season => dispatch(seasonCreateRequest(season)),
  // deleteSeason: season => dispatch(seasonDeleteRequest(season)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
