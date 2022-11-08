import React, { useState } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

import ReportModal from 'src/components/ReportModal';

export default function Comment({ comment, username, ...props }) {
  const { text, user } = comment;
  const [reportModalShow, setReportModalShow] = useState(false);

  const reportOnClick = () => setReportModalShow(true);

  return (
    <ListGroupItem className="d-flex flex-column mb-1">
      <p className="fw-bold mb-0">{user?.username}</p>
      <div className="d-flex gap-1">
        <p className="my-auto">{text}</p>
        <Button
          variant="outline-secondary"
          className="btn-sm border border-0"
          onClick={reportOnClick}>
          Report
        </Button>
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
