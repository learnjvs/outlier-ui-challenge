import React from 'react';
import PropTypes from 'prop-types';


const Rocket = ({ launch, rocket, fetchRocket }) => {

  // next rocket component
  return (
    <div>
        <button type="submit" onClick={fetchRocket}>Show Rocket Info</button>
        {rocket && <div>
          <div> rocket {rocket.cost_per_launch} </div>
          <div>
            {rocket.flickr_images.map((url) => <img height="50px" style={{ padding: '20px', border: '2px solid black' }} src={url} />)}
          </div>
        </div>}
    </div>
  );
}









Rocket.propTypes = {
  launch: PropTypes.shape({
    rocket: PropTypes.shape({
      rocket_id: PropTypes.string
    })
  }).isRequired,
  rocket: PropTypes.shape({
    cost_per_launch: PropTypes.number,
    flickr_images: PropTypes.array
  }).isRequired,
  fetchRocket: PropTypes.func.isRequired
};