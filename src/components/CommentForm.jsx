import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from 'react-query';

import { createComment } from 'src/api/forumApi';
import useInput from 'src/hooks/useInput';

export default function CommentForm({ post, username, refetch, ...props }) {
  const { mutate, isLoading } = useMutation(createComment, {
    onSuccess: () => {
      refetch();
    },
  });
  const [text, onTextChange, setText] = useInput('');

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ text, username, post });
    setText('');
  };

  return (
    <Form onSubmit={onSubmit} className={props.className}>
      <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
        <Form.Control
          type="text"
          placeholder="Comment now..."
          value={text}
          onChange={onTextChange}
          disabled={isLoading}
          required
        />
        {isLoading && (
          <div
            className="spinner-border text-primary d-absolute z-index-1"
            role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </Form.Group>
      <Button className="visually-hidden" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
