import React, { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    // Handle booking logic, including local storage and redirection
  };

  return (
    <div>
      <h1>Home Page</h1>
      {/* Add search box */}
      <form>
        <input
          type="text"
          placeholder="Search destinations"
          name="search"
          // Handle search logic
        />
      </form>
      {/* Add booking form */}
      <form>
        <input type="text" placeholder="Name" name="name" onChange={handleFormChange} />
        <input type="email" placeholder="Email" name="email" onChange={handleFormChange} />
        <input type="text" placeholder="Phone" name="phone" onChange={handleFormChange} />
        <input type="date" placeholder="Date" name="date" onChange={handleFormChange} />
        <button onClick={handleBooking}>Save</button>
      </form>
    </div>
  );
}

export default Home;
