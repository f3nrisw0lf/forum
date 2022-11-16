import React, { useState } from 'react';
import { Container, ListGroupItem, Card, Button } from 'react-bootstrap';

import Comment from 'src/components/Comment.jsx';
import CommentForm from 'src/components/CommentForm';
import ReportModal from 'src/components/ReportModal';
import Icon from 'src/static/icon.jpg';

export default function Post({ post, username, refetch, ...props }) {
  const [reportModalShow, setReportModalShow] = useState(false);
  const [isHateStyle, setIsHateStyle] = useState(post.isHate);

  return (
    <ListGroupItem className="mb-1 shadow-sm">
      <Card className="">
        <Card.Body>
          <Container className="mx-0 mb-3 px-0 d-flex gap-2">
            <img
              alt=""
              src={Icon}
              className="d-inline-block align-self-start"
              style={{ width: '30px' }}
            />
            <div className="w-100">
              <Card.Title className="fw-bold">
                {post?.user?.username}
              </Card.Title>
              <Card.Text
                className={isHateStyle ? 'bg-black rounded text-black' : ''}
                onClick={() => setIsHateStyle(false)}>
                {!isHateStyle && post?.content}
                {isHateStyle && (
                  <p
                    className="text-center fw-bold text-white h-100 py-2 my-auto"
                    style={{ cursor: 'pointer' }}>
                    Hate Speech
                  </p>
                )}
              </Card.Text>
            </div>
          </Container>
          <Card.Footer className="bg-transparent py-1 px-0 gap-1 d-flex align-items-center">
            <p className="my-auto">{post?.createdAt}</p>
            <Button
              onClick={() => setReportModalShow(true)}
              variant="outline-secondary"
              className="btn-sm border border-0">
              Report
            </Button>
          </Card.Footer>
          <ReportModal
            show={reportModalShow}
            onHide={() => setReportModalShow(false)}
            postId={post._id}
            content={post.content}
            username={username}
          />
          <Container className="mx-3 mb-2 ps-2 mt-1 px-0 border-start border-2">
            {post?.comments ? (
              post?.comments.map((comment) => (
                <>
                  <Comment
                    comment={comment}
                    key={comment._id}
                    username={username}
                  />
                </>
              ))
            ) : (
              <></>
            )}
          </Container>
          {post?.comments ? (
            <CommentForm
              username={username}
              post={post?._id}
              refetch={refetch}
            />
          ) : (
            <></>
          )}
        </Card.Body>
      </Card>
    </ListGroupItem>
  );
}
