import React from 'react';
import { useQuery } from 'react-query';
import { useCookies } from 'react-cookie';

import Post from 'src/components/Post';
import PostForm from 'src/components/PostForm';
import UsernameModal from 'src/components/UsernameModal';
import NavbarLight from 'src/components/NavbarLight';

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
      <NavbarLight />
      <div className="d-flex flex-column gap-3 px-4">
        <h1 className="fw-bold text-center my-3">Freedom Wall</h1>
        <UsernameModal show={!cookies.username} setUsername={setUsername} />
        <PostForm
          username={cookies.username}
          className="mb-2 p-4 py-3 my-4 border rounded shadow"
          refetch={refetch}
        />
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
          <div class="alert alert-light" role="alert">
            The Forum is currently empty..
          </div>
        )}
      </div>
    </>
  );
}
