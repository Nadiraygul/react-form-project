import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error("API Hatası:", error));
  }, [id]);

  if (!user) return <p>Yükleniyor...</p>;

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", marginTop: 5 }}>
      <CardMedia
        component="img"
        height="200"
        image={`https://source.unsplash.com/400x300/?person,${user.id}`} // Fake resim
        alt={user.name}
      />
      <CardContent>
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">{user.email}</Typography>
        <Typography variant="body2" color="text.secondary">{user.phone}</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
