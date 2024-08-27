import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import BioData from './Components/BioData';
import CourseTable from './Components/CourseTable';
import PersonalForm from './Components/PersonalForm';


function App() {
    return (
        <>
        
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bio" element={<BioData />} />
                <Route path="/table" element={<CourseTable />} />
                <Route path="/form" element={<PersonalForm />} />
            </Routes>
        </Router>

        </>
        
    );
}

export default App;
