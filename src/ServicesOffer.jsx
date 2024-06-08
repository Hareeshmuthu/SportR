import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Check() {
    const [showOnlineSales, setShowOnlineSales] = useState(false);
    const [showPricing, setShowPricing] = useState(false);
    const [showInsights, setShowInsights] = useState(false);


    const handleCloseOnlineSales = () => setShowOnlineSales(false);
    const handleClosePricing = () => setShowPricing(false);
    const handleCloseInsights = () => setShowInsights(false);


    const handleShowOnlineSales = () => setShowOnlineSales(true);
    const handleShowPricing = () => setShowPricing(true);
    const handleShowInsights = () => setShowInsights(true);


    return (
        <>
            <div className='servicesofferhead'>
                <div className='row'>
                    <h1>What we Offer?</h1>
                    <p>After Successful Collaboration we bring your dream to reality</p>
                </div>
            </div>
            <div className='row servicesofferbutton'>
                <div className="card col-4" style={{ width: "25rem", marginRight: "100px" }}>
                    <img src='/images/Pictures/ListSpot/Online_Marketing.jpg' alt="Online Marketing"></img>
                    <Button variant="danger" onClick={handleShowOnlineSales}>Online Sales and Marketing</Button>
                </div>
                <Modal show={showOnlineSales} onHide={handleCloseOnlineSales} style={{ marginTop: "165px" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Online Sales and Marketing</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Target Potential Customers</p>
                        <p>Broaden Your Customer Base</p>
                        <p>Listing your spot in Advertisement Bars</p>
                        <p>Engage on Social Media</p>
                        <p>Keep Your Spot Busy</p>
                        <p>Convenient and Smooth Sales Process</p>
                    </Modal.Body>
                </Modal>


                <div className="card col-4" style={{ width: "25rem", marginRight: "100px" }}>
                    <img src='/images/Pictures/ListSpot/Pricing.png' alt="Pricing"></img>
                    <Button variant="danger" onClick={handleShowPricing}>Price Recommendation</Button>
                </div>
                <Modal show={showPricing} onHide={handleClosePricing} style={{ marginTop: "165px" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Price Recommendation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Pricing Recommendation</p>
                        <p>Adapt Prices in Real-Time and Change Dynamically</p>
                        <p>Budget Promotional Spends</p>
                        <p>Create Unique Discount Offers</p> {/* Closing tag fixed */}
                        <p>Fast Tracked Payment Reconciliation</p>
                    </Modal.Body>
                </Modal>


                <div className="card col-4" style={{ width: "25rem", marginRight: "100px" }}>
                    <img src='/images/Pictures/ListSpot/Business Insights.svg' alt="Business Insights"></img>
                    <Button variant="danger" onClick={handleShowInsights}>Reports and Business Insights</Button>
                </div>
                <Modal show={showInsights} onHide={handleCloseInsights} style={{ marginTop: "165px" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reports and Business Insights</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Sales Track</p>
                        <p>Walk-in Behavioral Insights</p>
                        <p>Data Analysis Report</p>
                        <p>Revenue Report</p>
                    </Modal.Body>
                </Modal>
            </div>


            <div className='row '>
                <div className='col servicesoffercontent'>
                    <h1>Connect with Us and Experience the Eye-breaking</h1>
                    <h1>Impact on Revenue of Your Business!</h1>
                    <h4>Now let the Players in the Ground Sweat, not You</h4>
                </div>
            </div>
        </>
    );
}


export default Check;
