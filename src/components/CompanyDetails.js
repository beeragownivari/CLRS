import React from 'react';

const CompanyDetails = ({ company }) => {
    return (
        <div className="company-details">
            <h3>Company Name: {company.name}</h3>
            <p><strong>Industry:</strong> {company.industry}</p>
            <p><strong>Founded:</strong> {company.founded}</p>
            <p><strong>About:</strong> {company.about}</p>
            <p><strong>Website:</strong> <a href={company.website}>{company.website}</a></p>
        </div>
    );
};
export default CompanyDetails;
