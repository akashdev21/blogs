// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

// Updated blogs with real image links
const blogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    description: 'A comprehensive guide to using Hooks in React.',
    author: 'John Doe',
    date: '2024-09-01',
    image: 'https://images.unsplash.com/photo-1581091870628-1e7c5b95971a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJlYWN0fGVufDB8fHx8MTY1MTI1NjQ5Nw&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 2,
    title: 'React vs. Vue: A Complete Comparison',
    description: 'A deep dive into the differences between React and Vue.',
    author: 'Jane Smith',
    date: '2024-08-20',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHZ1ZXxlbnwwfHx8fDE2NTEyNTY1MjM&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Advanced State Management in React',
    description: 'Exploring advanced state management techniques in React.',
    author: 'Alice Brown',
    date: '2024-08-10',
    image: 'https://images.unsplash.com/photo-1535378917041-10a22c95931d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGVjb21tZXJjZXxlbnwwfHx8fDE2NTEyNTY1NTM&ixlib=rb-1.2.1&q=80&w=1080'
  }
];

const BlogList = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </Link>
            <p>{blog.description}</p>
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Date:</strong> {blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
