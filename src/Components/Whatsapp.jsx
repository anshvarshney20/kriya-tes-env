import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import logo from '../../src/Components/images/Kriyas.jpg'
const Whatsapp = ({ phoneNumber }) => {
  return (
    <div className="text-cols">
      <FloatingWhatsApp phoneNumber={phoneNumber} avatar={logo} accountName="KRIYA"  />
      </div>
  );
};

export default Whatsapp;
