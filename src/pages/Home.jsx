import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modalll from "../Components/Tableee/Modalll";

const Home = () => {
  const [users, setUsers] = useState([]); // Kullanıcıları state içinde tutuyoruz
  const [selectedUser, setSelectedUser] = useState(null); // Modal için seçilen kullanıcı

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("API Hatası:", error));
  }, []);

  // Kullanıcı güncellendiğinde yeni veriyi tabloya ekleme fonksiyonu
  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setSelectedUser(null); // Modal'ı kapat
  };

  return (
    <div>
      <h2>Kullanıcı Listesi</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Email</th>
            <th>Şirket</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company?.name}</td>
              <td>
                <button onClick={() => navigate(`/details/${user.id}`)} >onclick</button>
                <button onClick={() => setSelectedUser(user)}>Düzenle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Açılınca Kullanıcıyı Göster */}
      {selectedUser && (
        <Modalll user={selectedUser} onSave={handleUpdateUser} />
      )}
    </div>
  );
};

export default Home;
