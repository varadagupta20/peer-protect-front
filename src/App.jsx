import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import FeatureCards from './components/FeatureCards';
import FinancialHabits from './components/FinancialHabits';
import Subscribe from './components/Subscribe';
import WhyPeopleUse from './components/WhyPeopleUse';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Dashboard from './Dashboard';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const whyPeopleUseRef = useRef(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header whyPeopleUseRef={whyPeopleUseRef} />
            <FeatureCards />
            <FinancialHabits />
            <WhyPeopleUse ref={whyPeopleUseRef} />
            <FAQ />
            <Subscribe />
            <Footer />
          </>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;