import React from 'react';
import { Container, ListGroupItem, Card } from 'react-bootstrap';

import Comment from 'src/components/Comment.jsx';

export default function Post(props) {
  const { post } = props;

  return (
    <ListGroupItem id={post?._id} className="mx-4 my-2">
      <Card className="">
        <Card.Body>
          <Card.Title className="fw-bold">{post?.user?.username}</Card.Title>
          <Card.Text>{post?.content}</Card.Text>
          <Card.Footer className="bg-transparent py-1 px-0">
            {post?.createdAt}
          </Card.Footer>
          <Container className="mx-3 ps-2 mt-1 px-0 border-start border-2">
            {post?.comments ? (
              post?.comments.map((comment) => <Comment comment={comment} />)
            ) : (
              <></>
            )}
          </Container>
        </Card.Body>
      </Card>
    </ListGroupItem>
  );
}
