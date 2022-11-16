import React, { useState } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

import ReportModal from 'src/components/ReportModal';

export default function Comment({ comment, username, ...props }) {
  const { text, user } = comment;
  const [reportModalShow, setReportModalShow] = useState(false);
  const [isHateStyle, setIsHateStyle] = useState(comment.isHate);

  const reportOnClick = () => setReportModalShow(true);

  return (
    <ListGroupItem className={!isHateStyle && 'd-flex flex-column mb-1'}>
      <p className="fw-bold mb-0">{user?.username}</p>
      <div
        className={isHateStyle ? 'bg-black rounded text-black' : ''}
        onClick={() => setIsHateStyle(false)}>
        {!isHateStyle && text}
        {isHateStyle && (
          <p
            className="text-center fw-bold text-white h-100 py-2 my-auto"
            style={{ cursor: 'pointer' }}>
            Hate Speech
          </p>
        )}
        {!isHateStyle && (
          <Button
            variant="outline-secondary"
            className="btn-sm border border-0"
            onClick={reportOnClick}>
            Report
          </Button>
        )}
      </div>
      <ReportModal
        commentId={comment?._id}
        onHide={() => setReportModalShow(false)}
        show={reportModalShow}
        username={username}
      />
    </ListGroupItem>
  );
}
