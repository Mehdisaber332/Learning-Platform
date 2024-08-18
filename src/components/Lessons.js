import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.css';

const Lessons = () => {
  const lessons = [
    { id: 1, title: 'Lesson 1: Introduction to French', description: 'Learn the basics of French.' },
    { id: 2, title: 'Lesson 2: French Pronunciation', description: 'Master French pronunciation.' },
    { id: 3, title: 'Lesson 3: Basic English Grammar', description: 'Understand the basics of English grammar.' },
    // Add more lessons as needed
  ];

  return (
    <div className="lessons-container">
      <h1>Lessons</h1>
      <div className="lessons-list">
        {lessons.map(lesson => (
          <div key={lesson.id} className="lesson-card">
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
            <Link to={`/purchase/${lesson.id}`} className="purchase-button">Purchase Lesson</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lessons;