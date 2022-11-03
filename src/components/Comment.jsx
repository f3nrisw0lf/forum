import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default function Comment({ comment, ...props }) {
  const { text, user } = comment;

  return (
    <ListGroupItem>
      <p className="fw-bold mb-0">{user?.username}</p>
      <p className="mt-0">{text}</p>
    </ListGroupItem>
  );
}
