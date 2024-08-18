import React from 'react';
import './Posts.css'; // Ensure this CSS file is created for styling

const Posts = () => {
    // Sample posts data (this can be replaced with data fetched from a backend)
    const posts = [
        {
            id: 1,
            title: "Learning French Basics",
            content: "In this post, we will cover the basics of learning French, including common phrases and vocabulary.",
            date: "August 1, 2024"
        },
        {
            id: 2,
            title: "English Grammar Tips",
            content: "This post discusses essential English grammar tips to help you improve your writing skills.",
            date: "August 5, 2024"
        },
        {
            id: 3,
            title: "French Culture Insights",
            content: "Explore the rich culture of France through its language, cuisine, and traditions.",
            date: "August 10, 2024"
        }
    ];

    return (
        <div className="posts-container">
            <h2 className="cinematic-heading">New Posts</h2> {/* Updated title with cinematic class */}
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <small>{post.date}</small>
                </div>
            ))}
        </div>
    );
};

export default Posts;