import * as React from 'react';
import { Link } from 'react-router-dom';

const Templates = () => (
  <>
    <main>
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
    </main>
    <nav>
      <Link to='/about'>About</Link>
      <Link to='/tutorial'>Tutorial</Link>
    </nav>
  </>
);

export default Templates;
