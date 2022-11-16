import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function NavbarLight() {
  return (
    <Navbar
      variant="light"
      className="py-2 px-4 mb-4 bg-purple-100 fs-4 shadow border-bottom"
      style={{ fontWeight: '800', backgroundColor: '#7914b5' }}>
      <Navbar.Brand className="d-flex w-100 gap-2">
        <span className="fs-2 w-100 text-center text-light">SCST FORUM</span>
      </Navbar.Brand>
    </Navbar>
  );
}
