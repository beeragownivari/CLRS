import React, { useState } from 'react';
import { internships } from './data';
import '../css/style.css'

const ITEMS_PER_PAGE = 1;

const InternshipList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(internships.length / ITEMS_PER_PAGE);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const displayedInternships = internships.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div className="internship-list">
            {displayedInternships.map((internship) => (
                <div key={internship.id} className="internship-card">
                    <h2>{internship.title}</h2>
                    <p><strong>Location:</strong> {internship.location}</p>
                    <p><strong>Duration:</strong> {internship.duration}</p>
                    <p><strong>Responsibilities:</strong></p>
                    <ul>
                        {internship.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                        ))}
                    </ul>
                    <p><strong>Qualifications:</strong></p>
                    <ul>
                        {internship.qualifications.map((qual, index) => (
                            <li key={index}>{qual}</li>
                        ))}
                    </ul>
                    <div className="company-details">
                        <h3>Company: {internship.company.name}</h3>
                        <p><strong>Industry:</strong> {internship.company.industry}</p>
                        <p><strong>Founded:</strong> {internship.company.founded}</p>
                        <p><strong>About:</strong> {internship.company.about}</p>
                        <p><strong>Website:</strong> <a href={internship.company.website} target="_blank" rel="noopener noreferrer">{internship.company.website}</a></p>
                    </div>
                </div>
            ))}
            <div className="pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default InternshipList;
