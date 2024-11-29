import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Invoice.css';

function Invoice() {
  const [invoices, setInvoices] = useState([]);
  const [paymentDate, setPaymentDate] = useState('');

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setInvoices((prevInvoices) => [...prevInvoices, ...files]);
  };

  const removeInvoice = (index) => {
    setInvoices(invoices.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Payment Date:', paymentDate);
    console.log('Uploaded Invoices:', invoices);
    alert('Invoices submitted successfully!');
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <p>PLAN AND CELEBRATE</p>
        <div className="form">
          <label>Select Date of Payment</label>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            className="date-input"
          />

          <label>Attach Invoice Here</label>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="file-input"
          />
          <div className="invoices">
            {invoices.map((file, index) => (
              <div key={index} className="invoice-preview">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Invoice ${index + 1}`}
                  className="invoice-image"
                />
                <button
                  className="remove-btn"
                  onClick={() => removeInvoice(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
