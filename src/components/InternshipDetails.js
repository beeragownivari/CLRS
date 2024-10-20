import React from 'react';
import InternshipList from './InternshipList';
import PreparationDetails from './PreparationDetails';
import '../css/style.css'

const MainPage = () => {
    return (
        <div className="main-container">
            <div className="half-page internship-section">
                <InternshipList />
            </div>
            <div className="half-page preparation-section">
                <PreparationDetails />
            </div>
        </div>
    );
};

export default MainPage;
