// src/components/BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Updated blogs with real image links
const blogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    description: 'A comprehensive guide to using Hooks in React.',
    author: 'John Doe',
    date: '2024-09-01',
    content: 'React Hooks are functions that let you use state and other React features without writing a class...',
    image: 'https://images.unsplash.com/photo-1581091870628-1e7c5b95971a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJlYWN0fGVufDB8fHx8MTY1MTI1NjQ5Nw&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 2,
    title: 'React vs. Vue: A Complete Comparison',
    description: 'A deep dive into the differences between React and Vue.',
    author: 'Jane Smith',
    date: '2024-08-20',
    content: 'Both React and Vue are popular frameworks for building user interfaces...',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHZ1ZXxlbnwwfHx8fDE2NTEyNTY1MjM&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Advanced State Management in React',
    description: 'Exploring advanced state management techniques in React.',
    author: 'Alice Brown',
    date: '2024-08-10',
    content: 'State management is a crucial aspect of building dynamic web applications...',
    image: 'https://images.unsplash.com/photo-1535378917041-10a22c95931d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGVjb21tZXJjZXxlbnwwfHx8fDE2NTEyNTY1NTM&ixlib=rb-1.2.1&q=80&w=1080'
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Helmet>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        {/* <meta property="og:url" content={`http://localhost:3000/blog/${blog.id}`} /> */}
        <meta property="og:type" content="article" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.image} />
      </Helmet>

      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Date:</strong> {blog.date}</p>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
