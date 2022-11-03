import React from 'react';
import { useQuery } from 'react-query';

import Post from 'src/components/Post';
import PostForm from 'src/components/PostForm';

import { getPosts } from 'src/api/forumApi';

export default function Forum() {
  const { data, status } = useQuery('posts', getPosts);
  const username = 'Hello';

  return (
    <>
      <div className="mx-4 my-2">
        <PostForm username={username} className="mb-2 p-3 border rounded" />
        <div className="">
          {status === 'success' ? (
            data.map((post) => {
              return <Post post={post} key={post._id} username={username} />;
            })
          ) : (
            <h1>The Forum is Empty :)</h1>
          )}
        </div>
      </div>
    </>
  );
}
