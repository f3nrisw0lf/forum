import React from 'react';
import { Navbar } from 'react-bootstrap';
import SCSTImage from 'src/static/scst.png';

export default function NavbarLight() {
  return (
    <Navbar
      variant="light"
      className="py-2 px-4 mb-4 bg-purple-100 fs-4 shadow border-bottom"
      style={{ fontWeight: '800', backgroundColor: '#7914b5' }}>
      <Navbar.Brand className="d-flex gap-2">
        <img
          alt=""
          src={SCSTImage}
          width="30"
          height="30"
          className="d-inline-block align-top align-self-center"
        />{' '}
        <span className="fs-3 text-light">SCST Forum</span>
      </Navbar.Brand>
    </Navbar>
  );
}
