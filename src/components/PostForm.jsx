import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { createPost } from 'src/api/forumApi';

export default function PostForm({ username, refetch, ...props }) {
  const { mutate, isLoading } = useMutation(createPost, {
    onSuccess: () => {
      refetch();
      setText('');
    },
  });

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ text, username });
    setText('');
  };

  const onTextChange = (e) => {
    const { value } = e.target;
    setText(value);
    setWordCount(value.split(' ').length);

    if (value === '') setWordCount(0);
  };

  return (
    <Form onSubmit={onSubmit} className={props.className}>
      <Form.Group className="mb-0 d-flex" controlId="formBasicPassword">
        <div className="w-100">
          <Form.Label className="fw-bold">
            <h5 className="fw-bold">Create Post</h5>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={text}
            onChange={onTextChange}
            placeholder={`What's on your mind... ${username}`}
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
      {wordCount ? (
        <p className={`me-1 mb-0 text-end ${wordCount > 100 && 'text-danger'}`}>
          {wordCount} / 100
        </p>
      ) : (
        <p className="mb-2"></p>
      )}
      <Button
        className="px-5"
        variant="secondary"
        type="submit"
        disabled={wordCount > 100}>
        Submit
      </Button>
    </Form>
  );
}
