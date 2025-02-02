import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data); 
      })
      .catch((error) => console.error( error));
  }, [id]); 

  if (!user) {
    return <div>Yükleniyor...</div>;
  }

 

  return (
    <div>
      <h2>{user.name}</h2>
      <p><strong>E-posta:</strong> {user.email}</p>
      <p><strong>Telefon:</strong> {user.phone}</p>
      <p><strong>Şirket:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserDetails;
