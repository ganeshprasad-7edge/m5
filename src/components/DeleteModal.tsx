import React from 'react';
import deleteWarning from '/delete_warning.svg'
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  productName: string;
}

export default function DeleteModal({ isOpen, onClose, onDelete, productName }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <img src={deleteWarning} alt="Warning" />
        <h3 className="text-lg font-medium mb-2  mt-4">Delete Product</h3>
        <p className="mb-6">
          Are you sure you want to delete the product '{productName}'?
        </p>
        <div className="flex justify-end gap-4 w-full">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-black hover:bg-gray-100 w-1/2"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-[#4094F7] text-white rounded-md hover:bg-red-700 w-1/2 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}