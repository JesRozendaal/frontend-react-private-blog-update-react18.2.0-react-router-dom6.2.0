import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

function Overview() {
  return (
    <section>
      <h1>Blog overzichtspagina</h1>
      <h3>Aantal blogposts: {posts.length}</h3>
      <ul>
        {posts.map((post) => {
          return <li>
            <Link to={`blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        })}
      </ul>
    </section>
  );
}

export default Overview;