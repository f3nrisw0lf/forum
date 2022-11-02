import React from 'react';

export default function Comment({ comment, ...props }) {
  const { text, user } = comment;

  return (
    <>
      <p className="fw-bold mb-0">{user?.username}</p>
      <p className="mt-0">{text}</p>
    </>
  );
}
