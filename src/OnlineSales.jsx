import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Serviceonlinemarketing() {
  return (
    <div>
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Online Sales and Marketing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Target Potential Customers</p>
          <p>Broaden Your Customer Base</p>
          <p>Listing your spot in Advertisement Bars</p>
          <p>Engage on Social Media</p>
          <p>Keep Your Spot Busy</p>
          <p>Convenient and Smooth Sales Proccess</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Price Recommendation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Pricing Recommendation</p>
        <p>Adapt Prices in Real-Time and Change Dynamicaly</p>
        <p>Budget Promotional Spends</p>
        <p>Create Unique Discount Offers</p>
        <p>Fast Tracked Payment Reconcillation</p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Reports and Bussiness Insights</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Sales Track</p>
        <p>Walk in Behavioaral Insights</p>
        <p>Data Analysis Report</p>
        <p>Revenue Report</p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal.Dialog>
  </div>

    </div>
    
    
  );
}

export default Serviceonlinemarketing;