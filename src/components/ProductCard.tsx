import React from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '/delete.svg';
import editIcon from '/edit.svg';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
      image: string;
    };
  };
  onDeleteClick: (product: any) => void;
  isSelected: boolean;
  onSelectChange: (id: number, isChecked: boolean) => void;
}

export default function ProductCard({ product, onDeleteClick, isSelected, onSelectChange }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            className="mr-3 cursor-pointer" 
            checked={isSelected}
            onChange={(e) => onSelectChange(product.id, e.target.checked)}
          />
          <img 
            src={product.category.image} 
            alt="" 
            className="w-12 h-12 object-cover rounded-lg mr-3" 
          />
          <h3 className="font-medium">{product.title}</h3>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {product.description}
      </p>
      
      <div className="flex justify-between items-center">
        <span className="font-medium">$ {product.price}</span>
        <div className="flex space-x-4">
          <img 
            src={deleteIcon} 
            alt="Delete" 
            className="cursor-pointer" 
            onClick={() => onDeleteClick(product)} 
          />
          <Link to={`/update/${product.id}`}>
            <img src={editIcon} alt="Edit" />
          </Link>
        </div>
      </div>
    </div>
  );
}