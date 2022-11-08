import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from 'react-query';

import useInput from 'src/hooks/useInput';

import { createPost } from 'src/api/forumApi';

export default function PostForm({ username, refetch, ...props }) {
  const { mutate, isLoading, isSuccess, reset } = useMutation(createPost);
  const [text, onTextChange, setText] = useInput('');

  useEffect(() => {
    if (isSuccess) {
      refetch();
      reset();
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ text, username });
    setText('');
  };

  return (
    <Form onSubmit={onSubmit} className={props.className}>
      <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
        <div className="w-100">
          <Form.Label className="fw-bold">
            <h5 className="fw-bold">Create Post</h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Post now..."
            onChange={onTextChange}
            disabled={isLoading}
            required
          />
        </div>
        {isLoading && (
          <div
            className="spinner-border text-primary d-absolute z-index-1"
            role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
