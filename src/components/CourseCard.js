// components/CourseCard.js
import React from 'react';
import '../css/CourseCard.css'; // Import your CSS file

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>
    </div>
  );
};

export default CourseCard;
