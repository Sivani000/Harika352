import React, { useState } from 'react';
import Heading from '../../common/Heading';
import './hero.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Hero = () => {
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching with:', { city, propertyType, priceRange });
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home' />

          <form className='flex' onSubmit={handleSearch}>
            <div className='box'>
              <span>City/Street</span>
              <div className="search">
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Places</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Banglore">Banglore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Vizag">Vizag</option>
                </select>
              </div>
            </div>
            <div className='box'>
              <span>Property Type</span>
              <div className="property">
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                  <option value="">Type</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Office">Office</option>
                  <option value="Family houses">Family houses</option>
                  <option value="Double bedroom">Double bedroom</option>
                  <option value="Single bedroom">Single bedroom</option>
                  <option value="Duplex">Duplex</option>
                </select>
              </div>
            </div>
            <div className='box'>
              <span>Price Range</span>
              <div className="cost">
                <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                  <option value="">Cost</option>
                  <option value="50k-99k">50k-99k</option>
                  <option value="100k-999k">100k-999k</option>
                  <option value="1000k-1499k">1000k-1499k</option>
                  <option value="1500k-1999k">1500k-1999k</option>
                  <option value="2000k-2999k">2000k-2999k</option>
                  <option value="3000k and above">3000k and above</option>
                </select>
              </div>
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
              {/* Add more filters here if needed */}
            </div>
            <button type='submit' className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
