import React, { useState } from 'react';
import './Viewdetails.css';

function Details() {
  const property = {
    id: 1,
    title: "Red Carpet Real Estate",
    description: "A beautiful family house located in a prime area with all modern amenities.",
    price: 50000,
    address: "210 Zirak Road, Hyderabad",
    images: [
      "/images/list/p-1.png",
      "/images/list/p-8.jpg",
      "/images/list/p-9.jpg"
    ],
    features: [
      "4 Bedrooms",
      "3 Bathrooms",
      "2 Car Garage",
      "Swimming Pool",
      "Garden",
    ],
    contact: {
      name: "John Doe",
      phone: "555-1234",
      email: "john.doe@example.com",
    },
  };

  const [isPurchased, setIsPurchased] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBuyNow = () => {
    setIsPurchased(true);
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="property-details">
      <div className="property-card">
        <h1 className="property-title">{property.title}</h1>
        <p className="property-price">Price: ₹{property.price.toLocaleString('en-IN')}/-</p>
        <p className="property-address">{property.address}</p>

        <div className="property-images">
          <button onClick={prevImage} className="carousel-btn">❮</button>
          <img
            src={property.images[currentImageIndex]}
            alt={`Property view ${currentImageIndex + 1}`}
            className="property-image"
          />
          <button onClick={nextImage} className="carousel-btn">❯</button>
        </div>

        <p className="property-description">{property.description}</p>

        <h3 className="property-section-title">Features</h3>
        <ul className="property-features">
          {property.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h3 className="property-section-title">Contact Information</h3>
        <p className="property-contact">Name: {property.contact.name}</p>
        <p className="property-contact">Phone: <a href={`tel:${property.contact.phone}`}>{property.contact.phone}</a></p>
        <p className="property-contact">Email: <a href={`mailto:${property.contact.email}`}>{property.contact.email}</a></p>

        <div className="property-actions">
          <button 
            onClick={handleBuyNow} 
            className={`btn ${isPurchased ? 'btn-disabled' : 'btn-primary'}`}
            disabled={isPurchased}
          >
            {isPurchased ? "Purchased" : "Buy Now"}
          </button>
          
          <button 
            onClick={handleAddToWishlist} 
            className={`btn ${isWishlisted ? 'btn-disabled' : 'btn-secondary'}`}
            disabled={isWishlisted}
          >
            {isWishlisted ? "Wishlisted" : "Add to Wish List"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
