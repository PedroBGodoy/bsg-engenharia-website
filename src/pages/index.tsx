import React from 'react';
import { Link } from 'gatsby';

const Home: React.FunctionComponent = () => {
  return (
    <main>
      <h1>What a world.</h1>
      <p>
        <Link to="/about/">About</Link>
      </p>
    </main>
  );
};

export default Home;
