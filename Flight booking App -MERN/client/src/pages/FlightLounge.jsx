import React, { useState } from 'react';
import '../styles/FlightLounge.css'; // Optional: Add CSS for styling

const lounges = [
  {
    id: 1,
    name: 'VIP Lounge',
    location: 'Terminal 1',
    amenities: ['Free WiFi', 'Drinks', 'Snacks', 'TV', 'Shower'],
    price: 100
  },
  {
    id: 2,
    name: 'Business Class Lounge',
    location: 'Terminal 2',
    amenities: ['Drinks', 'Snacks', 'Resting Area', 'Meeting Rooms'],
    price: 75
  },
  {
    id: 3,
    name: 'Economy Class Lounge',
    location: 'Terminal 3',
    amenities: ['Snacks', 'Resting Area', 'TV'],
    price: 50
  }
];

const FlightLounge = () => {
  const [selectedLounge, setSelectedLounge] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleLoungeSelection = (lounge) => {
    setSelectedLounge(lounge);
    setBookingConfirmed(false); // Reset booking confirmation if another lounge is selected
  };

  const handleLoungeBooking = () => {
    setBookingConfirmed(true);
    // You can also trigger an API call or further logic here to handle actual booking
  };

  return (
    <div className="lounge-container">
      <h1>Available Lounges</h1>
      <div className="lounge-list">
        {lounges.map((lounge) => (
          <div
            key={lounge.id}
            className={`lounge-card ${selectedLounge && selectedLounge.id === lounge.id ? 'selected' : ''}`}
            onClick={() => handleLoungeSelection(lounge)}
          >
            <h2>{lounge.name}</h2>
            <p><strong>Location:</strong> {lounge.location}</p>
            <p><strong>Amenities:</strong> {lounge.amenities.join(', ')}</p>
            <p><strong>Price:</strong> ${lounge.price}</p>
          </div>
        ))}
      </div>

      {selectedLounge && (
        <div className="selected-lounge-info">
          <h2>Selected Lounge: {selectedLounge.name}</h2>
          <p><strong>Location:</strong> {selectedLounge.location}</p>
          <p><strong>Price:</strong> ${selectedLounge.price}</p>
          {!bookingConfirmed ? (
            <button className="book-lounge-btn" onClick={handleLoungeBooking}>
              Book This Lounge
            </button>
          ) : (
            <p className="booking-confirmation">Thank you for booking the {selectedLounge.name}!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FlightLounge;
