import React from 'react';
import { Container, ListGroupItem, Card } from 'react-bootstrap';

import Comment from 'src/components/Comment.jsx';
import CommentForm from 'src/components/CommentForm';

export default function Post({ post, username, ...props }) {
  return (
    <ListGroupItem className="mb-1">
      <Card className="">
        <Card.Body>
          <Card.Title className="fw-bold">{post?.user?.username}</Card.Title>
          <Card.Text>{post?.content}</Card.Text>
          <Card.Footer className="bg-transparent py-1 px-0">
            {post?.createdAt}
          </Card.Footer>
          <Container className="mx-3 ps-2 mt-1 px-0 border-start border-2">
            {post?.comments ? (
              post?.comments.map((comment) => (
                <>
                  <Comment comment={comment} key={comment._id} />
                </>
              ))
            ) : (
              <></>
            )}
          </Container>
          {post?.comments ? (
            <CommentForm username={username} post={post?._id} />
          ) : (
            <></>
          )}
        </Card.Body>
      </Card>
    </ListGroupItem>
  );
}
