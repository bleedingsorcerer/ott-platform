import React from 'react';
import "./home.css";
import Navbar from '../../components/navbar/Navbar.jsx';
import Featured from '../../components/featured/Featured.jsx';
import List from '../../components/list/List.jsx';


const Home = () => {
  return (
    <div className="home">
    <Navbar/>
    <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home;

