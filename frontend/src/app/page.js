"use client"
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react'
import { Link } from 'next/link';





const Page = () => {

  
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    sourceAirport: '',
    destinationAirport: '',
    date: '',
    itineraryType: '',
    sortOrder: '',
    numAdults: '',
    numSeniors: '',
    classOfService: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${form.sourceAirport}&destinationAirportCode=${form.destinationAirport}&date=${form.date}&itineraryType=${form.itineraryType}&sortOrder=${form.sortOrder}&numAdults=${form.numAdults}&numSeniors=${form.numSeniors}&classOfService=${form.classOfService}&pageNumber=1&currencyCode=USD`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key':  process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
     
   
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
     
       const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${form.sourceAirport}&destinationAirportCode=${form.destinationAirport}&date=${form.date}&itineraryType=${form.itineraryType}&sortOrder=${form.sortOrder}&numAdults=${form.numAdults}&numSeniors=${form.numSeniors}&classOfService=${form.classOfService}&pageNumber=1&currencyCode=USD`;
     
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "RAPID_API_KEY",
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  console.log(result)
  setData(result);
	console.log(result);
} catch (error) {
	console.error(error);
}
    };

    
    if (form.sourceAirport && form.destinationAirport && form.date && form.itineraryType && form.sortOrder && form.numAdults && form.numSeniors && form.classOfService) {
      fetchData();
      console.log(data)
    }
   
  }, [form]);


  return (
    <>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '60px',
      backgroundColor: 'white',
      zIndex: 10
    
    }}>
    <Navbar  />
    </div>
    
    <div
    style={{
      // backgroundImage: `url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      marginTop: '60px',
      width: '100vw',
      position: 'relative'
    }}
     >
   <video autoPlay muted loop style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
    <source src='/video1.mp4' type='video/mp4' />
    </video>



    <div className="p-6 
      drop-shadow-xl

    max-w-sm mx-auto bg-white rounded-xl shadow-md flex space-x-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      
      <form className="space-y-6  " onSubmit={handleSubmit}>
        <input className="border-2 border-gray-300 p-2 w-full" name="sourceAirport" value={form.sourceAirport} onChange={handleChange} placeholder="Source Airport" />
        <input className="border-2 border-gray-300 p-2 w-full" name="destinationAirport" value={form.destinationAirport} onChange={handleChange} placeholder="Destination Airport" />
        <input className="border-2 border-gray-300 p-2 w-full" type="date" name="date" value={form.date} onChange={handleChange} />
        <select className="border-2 border-gray-300 p-2 w-full" name="sortOrder" value={form.sortOrder} onChange={handleChange}>
          <option value="">Select Sort Order</option>
          <option value="PRICE">Price</option>
          <option value="DURATION">Duration</option>
          
          {/* Add more options as needed */}
        </select>
        <select className="border-2 border-gray-300 p-2 w-full" name="itineraryType" value={form.itineraryType} onChange={handleChange}>
          <option value="">Select Itinerary Type</option>
          <option value="ONE_WAY">One Way</option>
          <option value="ROUND_TRIP">Round Trip</option>
        </select>
        <input className="border-2 border-gray-300 p-2 w-full" type="number" name="numAdults" value={form.numAdults} onChange={handleChange} placeholder="Number of Adults" />
        <input className="border-2 border-gray-300 p-2 w-full" type="number" name="numSeniors" value={form.numSeniors} onChange={handleChange} placeholder="Number of Seniors" />
        <select className="border-2 border-gray-300 p-2 w-full" name="classOfService" value={form.classOfService} onChange={handleChange}>
          <option value="">Select Class of Service</option>
          <option value="ECONOMY">Economy</option>
          <option value="BUSINESS">Business</option>
          <option value="FIRST">First</option>
          <option value="PREMIUM_ECONOMY">Premium Economy</option>
        </select>
       
        <button type="submit" className="border-2 border-blue-300 bg-blue-800 first-letter p-2 w-full">Submit</button>

        
      </form>

    </div>

   
 
    </div>
    <div>
      <h1>Results</h1>
      
      {data && data.length > 0 ? (
          data.map((flight, index) => (
            <div key={index}>
              <h2>Flight {index + 1}</h2>
              {flight.segments &&
                flight.segments[0].legs &&
                flight.segments[0].legs.map((leg, legIndex) => (
                  <div key={legIndex}>
                    {/* ... (your existing leg information rendering) */}
                  </div>
                ))}
              {flight.purchaseLinks &&
                flight.purchaseLinks.map((link, linkIndex) => (
                  <div key={linkIndex}>
                    {/* ... (your existing purchase link information rendering) */}
                  </div>
                ))}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}</div>

    <footer style={{ backgroundColor: '#f8f9fa', padding: '10px', position: 'fixed', width: '100%', bottom: '0' }}>
      <p style={{ textAlign: 'center' }}>© 2022 Your Company Name</p>
    </footer>

    </>
  )
}

export default Page;