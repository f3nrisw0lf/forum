import React from 'react';
import { useQuery } from 'react-query';

import { getPosts } from 'src/api/forumApi';

import Post from 'src/components/Post';

export default function Forum() {
  const { data, status } = useQuery('posts', getPosts);

  return (
    <>
      <div className="">
        {status === 'success' ? (
          data.map((post) => {
            return <Post post={post} />;
          })
        ) : (
          <h1>The Forum is Empty :)</h1>
        )}
      </div>
    </>
  );
}
