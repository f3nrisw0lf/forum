import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Modal, Button } from 'react-bootstrap';

import { createReport } from 'src/api/forumApi';

export default function ReportModal({
  postId,
  commentId,
  content,
  username,
  ...props
}) {
  const { mutate, isSuccess, reset } = useMutation('report', createReport);

  useEffect(() => {
    if (isSuccess) {
      reset();
      props.onHide();
    }
  });

  const reportOnClick = (isHate) => {
    console.log({ isHate });
    mutate({
      comment: commentId,
      post: postId,
      isHate,
      username,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
          Report - "{content}"
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Hate Speech</h4>
        <p>
          Any form of speech, writing, or behavior that criticizes or utilizes
          derogatory terms to refer to an individual or a group based on who
          they are; for example, based on their religion, ethnicity,
          nationality, race, color, descent, gender, or other identification
          factor.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => reportOnClick(true)}
          className="fw-bold"
          variant="danger">
          Report as Hate Speech
        </Button>
        <Button
          onClick={() => reportOnClick(false)}
          className="fw-bold"
          variant="success">
          Report as Not Hate Speech
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
