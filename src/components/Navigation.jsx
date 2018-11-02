import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li><Link to="/launches">Launches</Link></li>
  </ul>
);

export default Navigation;


/*


<div>
  <Link to="/">Launches</Link>
  <Link to="/launches">Launches</Link>
  add more as needed
</div>

*/