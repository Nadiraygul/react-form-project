import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/Submitbuton';
import List from '../components/List';


const Home = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    surname: '',
    phone: '',
    password: '',
    currentpassword: '',
  });

  const [isDisabled, setIsDisabled] = useState(true); // Buton disabled durumu

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    setUsers([...users, formdata]); // Yeni kullanıcıyı listeye ekler

    // Formu sıfırla
    setFormdata({
      name: '',
      surname: '',
      phone: '',
      password: '',
      currentpassword: '',
    });

    console.log(users);
  };

  // useEffect kullanarak formdatadaki değişiklikleri izliyoruz
  useEffect(() => {
    setIsDisabled(
      !formdata.name ||
      !formdata.surname ||
      !formdata.phone ||
      !formdata.password ||
      !formdata.currentpassword ||
      formdata.password !== formdata.currentpassword
    );
  }, [formdata]); // formdata değiştikçe isDisabled güncellenir

  return (
    <div className="home-container">
      <h1>React Input Component Example</h1>
      <Input
        id="Name"
        name="name"
        type="text"
        value={formdata.name}
        onChange={handleInputChange}
        label="name"
      />
      <Input
        id="Surname"
        name="surname"
        type="text"
        value={formdata.surname}
        onChange={handleInputChange}
        label="surname"
      />
      <Input
        id="Phone"
        name="phone"
        type="text"
        value={formdata.phone}
        onChange={handleInputChange}
        label="phone"
      />
      <Input
        id="Password"
        name="password"
        type="password"
        value={formdata.password}
        onChange={handleInputChange}
        label="password"
      />
      <Input
        id="Current Password"
        name="currentpassword"
        type="password"
        value={formdata.currentpassword}
        onChange={handleInputChange}
        label="current password"
      />
      <SubmitButton disabled={isDisabled} onClick={handleSubmit} />
      <List data={users} />
    </div>
  );
};

export default Home;

