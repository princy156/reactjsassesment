import React from 'react';

// Mock data for car listings
const cars = [
  { id: 1, name: 'Sedan', price: 50 },
  { id: 2, name: 'SUV', price: 70 },
  { id: 3, name: 'Sports Car', price: 100 },
];

function CarListing() {
  return (
    <div className="car-listing">
      <h2>Available Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.name} - ${car.price}/day
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarListing;