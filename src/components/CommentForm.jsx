import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from 'react-query';

import { createComment } from 'src/api/forumApi';

export default function CommentForm({ post, username, refetch, ...props }) {
  const { mutate, isLoading } = useMutation(createComment, {
    onSuccess: () => {
      refetch();
    },
  });
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ text, username, post });
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
      <Form.Group className="d-flex" controlId="formBasicPassword">
        <Form.Control
          type="text"
          value={text}
          onChange={onTextChange}
          placeholder={`Comment now...`}
          disabled={isLoading}
          autoComplete="off"
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
      {wordCount ? (
        <p className={`me-1 mb-0 text-end ${wordCount > 100 && 'text-danger'}`}>
          {wordCount} / 100
        </p>
      ) : (
        ''
      )}
      <Button
        className="visually-hidden"
        variant="primary"
        type="submit"
        disabled={wordCount > 100}>
        Submit
      </Button>
    </Form>
  );
}
