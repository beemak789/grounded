import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastMessage = () => {
  console.log("this is running")
  return (
    <Toast>
    <Toast.Header>
      <strong className="me-auto">Success!</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>Your coffee was added to the cart</Toast.Body>
  </Toast>
  );
};

export default ToastMessage
