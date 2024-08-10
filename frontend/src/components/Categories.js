import React, { useEffect, useState } from 'react';

function Categories({ setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from backend
    fetch('http://localhost:5001/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  if (categories.length === 0) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="categories">
      {categories.map((category) => (
        <button key={category} onClick={() => setCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
