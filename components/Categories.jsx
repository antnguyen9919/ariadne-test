import React,{useState,useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);


  return (
    <div className="bg-white shadow-lg rounded-lg p-5 pb-12 mb-8">
      <h3 className="text-xl mb-5 font-semibold border-b pb-3">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/blog/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
}; 

export default Categories