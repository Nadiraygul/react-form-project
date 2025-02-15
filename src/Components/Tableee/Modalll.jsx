import React, { useState } from "react";

const Modalll = ({ user, onSave }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [company, setCompany] = useState(user?.company?.name || "");

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      email,
      company: { ...user.company, name: company },
    };
    onSave(updatedUser); // Güncellenmiş veriyi tabloya gönder
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", marginTop: "10px" }}>
      <h3>Kullanıcıyı Düzenle</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
      <button onClick={handleSave}>Kaydet</button>
    </div>
  );
};

export default Modalll;
