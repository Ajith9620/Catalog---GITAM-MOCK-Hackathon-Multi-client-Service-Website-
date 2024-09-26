import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import ServiceDetails from './components/ServiceDetails';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/services/:id" element={<ServiceDetails />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
