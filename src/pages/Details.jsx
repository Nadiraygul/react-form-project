import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, CircularProgress } from "@mui/material";

function Details() {
  const { id } = useParams(); // 🟢 URL'den ID'yi al
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Veri alınırken hata oluştu:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4">Kullanıcı Detayları</Typography>
      <Typography variant="h6">ID: {user.id}</Typography>
      <Typography variant="h6">İsim: {user.name}</Typography>
      <Typography variant="h6">Email: {user.email}</Typography>
      <Typography variant="h6">Telefon: {user.phone}</Typography>
      <Typography variant="h6">Şehir: {user.address.city}</Typography>
    </Container>
  );
}

export default Details;
