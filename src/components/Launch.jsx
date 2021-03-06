import React from 'react';
import PropTypes from 'prop-types';

const Launch = ({ launch, rocket, fetchRocket }) => {

  // nest rocket component
  return (
    <div>
      <li>
        <h2> {launch.mission_name} </h2>
        <div> {launch.rocket.rocket_name} </div>
        <div> {launch.rocket.rocket_id} </div>
        <button type="submit" onClick={fetchRocket}>Show Rocket Info</button>
        {rocket && <div>
          <div> rocket {rocket.cost_per_launch} </div>
          <div>
            {rocket.flickr_images.map((url) => <img height="50px" style={{ padding: '20px', border: '2px solid black' }} src={url} />)}
          </div>
        </div>}
      </li>
    </div>
  );
}

Launch.propTypes = {
  launch: PropTypes.shape({
    mission_name: PropTypes.string,
    rocket: PropTypes.shape({
      rocket_id: PropTypes.string,
      rocket_name: PropTypes.string
    })
  }).isRequired
};

export default Launch;
