import React from 'react';
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import CounterInput from "./components/CounterInput"
import Table from "./components/Table"
import Footer from "./components/Footer"


function App() {
  return (
    <div className='w-75  container' >
      <Header />
      <Card />
      <CounterInput />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
