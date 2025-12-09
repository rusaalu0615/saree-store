import React from 'react';
import Navbar from './navbar';

export default function LandingPage() {
  return (
   
      

      <div className="relative ">
        <Navbar />   {/* stays at top */}
        <img
          src="/landingpage.jpg"
          alt="Landing Page"
          className="w-full h-screen object-cover"
        />
      </div>
   
  );
}
