import React from 'react';
import { useQuery } from 'react-query';
import { useCookies } from 'react-cookie';

import Post from 'src/components/Post';
import PostForm from 'src/components/PostForm';
import UsernameModal from 'src/components/UsernameModal';

import { getPosts } from 'src/api/forumApi';

export default function Forum() {
  const { data, refetch, status } = useQuery('posts', getPosts);
  const [cookies, setCookies] = useCookies(['username']);

  const setUsername = (text) => {
    setCookies('username', text, {
      path: '/',
      sameSite: 'strict',
      secure: true,
    });
  };

  return (
    <>
      <UsernameModal show={!cookies.username} setUsername={setUsername} />
      <div className="mx-4 my-2">
        <PostForm
          username={cookies.username}
          className="mb-2 p-3 border rounded"
          refetch={refetch}
        />
        <div className="">
          {status === 'success' ? (
            data.map((post) => {
              return (
                <Post
                  post={post}
                  key={post._id}
                  username={cookies.username}
                  refetch={refetch}
                />
              );
            })
          ) : (
            <h1>The Forum is Empty :)</h1>
          )}
        </div>
      </div>
    </>
  );
}
