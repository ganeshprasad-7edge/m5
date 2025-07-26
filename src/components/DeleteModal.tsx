import React from 'react';
import deleteWarning from '/delete_warning.svg'
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  productName: string;
  isLoading?: boolean;
}

export default function DeleteModal({ isOpen, onClose, onDelete, productName, isLoading = false }: DeleteModalProps) {
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
            disabled={isLoading}
            className="px-4 py-2 bg-[#4094F7] text-white rounded-md w-1/2 font-semibold flex justify-center items-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Deleting...
              </>
            ) : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}