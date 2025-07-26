import { useNavigate } from "react-router-dom";

import { useState } from "react";
import TopBar from './topbar'
import Header from './header'
import { useToast } from '../context/ToastContext'

export default function AddProduct() {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [errors, setErrors] = useState({
        title: false,
        price: false,
        description: false,
        image: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.type.match(/^image\/(jpg|jpeg|png)$/)) {
                setImage(file);
                setErrors({
                    title: false,
                    price: false,
                    description: false,
                    image: false
                });
                const imageUrl = URL.createObjectURL(file);
                setPreviewUrl(imageUrl);
            } else {
                setErrors({...errors, image: true});
            }
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
            if (file.type.match(/^image\/(jpg|jpeg|png)$/)) {
                setImage(file);
                setErrors({
                    title: false,
                    price: false,
                    description: false,
                    image: false
                });
                const imageUrl = URL.createObjectURL(file);
                setPreviewUrl(imageUrl);
            } else {
                setErrors({...errors, image: true});
            }
        }
    };

    const clearImage = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    const validateForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            title: title.trim() === "",
            price: price.trim() === "",
            description: description.trim() === "",
            image: !image
        };
        setErrors(newErrors);

        if (!newErrors.title && !newErrors.price && !newErrors.description && !newErrors.image) {
            setIsSubmitting(true);
            try {
                const imageUrl = "https://placehold.co/600x400";
                
                const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title,
                        price: Number(price),
                        description,
                        categoryId: 8,
                        images: [imageUrl]
                    })
                });

                if (response.ok) {
                    showToast('Product added successfully', 'success');
                    navigate('/');
                } else {
                    showToast('Failed to add product', 'error');
                    console.error('Failed to add product');
                }
            } catch (error) {
                console.error('Error adding product:', error);
                showToast('Error adding product', 'error');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="w-full overflow-auto">
            <TopBar />
            <Header />
            <div className='pl-12 pr-8 pt-6'>
                <div className='w-[65%]'>
                    <div className='text-[#84919A] text-sm mb-1'>Product image <span className="text-red-500">*</span></div>
                    <div 
                        className='flex flex-col gap-2 justify-center items-center border-2 border-dashed py-10'
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                    >
                        {previewUrl ? (
                            <div className="relative w-48 h-48 mb-4">
                                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover"/>
                                <button 
                                    onClick={clearImage}
                                    className="absolute top-1 right-0 bg-[#E5E9EB] text-black text-lg rounded-full p-1 w-6 h-6 flex items-center justify-center"
                                >
                                    ×
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3>Drag and drop files</h3>
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/jpg,image/jpeg,image/png"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <label htmlFor="imageUpload" className='border-[#E5E9EB] border-2 py-1 px-2 rounded-md cursor-pointer'>
                                    Browse
                                </label>
                                <p className='text-[#84919A] text-sm'>Supported file types: jpg, png and jpeg format</p>
                            </>
                        )}
                        {errors.image && <p className="text-red-500 text-sm mt-1">Image is required and must be jpg, jpeg, or png</p>}
                    </div>
                    <div className='flex items-center gap-6 mt-4 w-full'>
                        <div className='w-1/2'>
                            <h3>Title <span className="text-red-500">*</span></h3>
                            <input 
                                type="text" 
                                placeholder="Enter product title" 
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    setErrors({
                                        title: false,
                                        price: false,
                                        description: false,
                                        image: false
                                    });
                                }}
                                className={`border-2 ${errors.title ? 'border-red-500' : 'border-[#E5E9EB]'} rounded-md h-14 w-full px-2`}
                                required 
                            />
                            {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
                        </div>
                        <div className='w-1/2'>
                            <h3>Price <span className="text-red-500">*</span></h3>
                            <input 
                                type="number" 
                                placeholder="Enter product price" 
                                value={price}
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                    setErrors({
                                        title: false,
                                        price: false,
                                        description: false,
                                        image: false
                                    });
                                }}
                                className={`border-2 ${errors.price ? 'border-red-500' : 'border-[#E5E9EB]'} rounded-md h-14 w-full px-2`}
                                required
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">Price is required</p>}
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3>Description <span className="text-red-500">*</span></h3>
                        <input 
                            type="text" 
                            placeholder="Enter product description" 
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                setErrors({
                                    title: false,
                                    price: false,
                                    description: false,
                                    image: false
                                });
                            }}
                            className={`border-2 ${errors.description ? 'border-red-500' : 'border-[#E5E9EB]'} rounded-md h-14 w-full px-2`}
                            required
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
                    </div>
                    {/* <div className='w-full mt-4'>
                        <div className='w-1/2'>
                            <button 
                                onClick={validateForm}
                                className="flex items-center justify-center p-1 rounded-lg bg-[#4094F7] text-white border-2 w-full h-12"
                            >
                                Add
                            </button>
                        </div>
                    </div> */}
                    <div className='w-full mt-4'>
                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <button 
                                    type="button" 
                                    onClick={() => navigate('/')}
                                    className="flex justify-center items-center p-1 rounded-lg bg-white text-gray-700 border-2 w-full h-12"
                                >
                                    Cancel
                                </button>
                            </div>
                            <div className='w-1/2'>
                                <button 
                                    type="button" 
                                    onClick={validateForm}
                                    disabled={isSubmitting}
                                    className="flex justify-center items-center p-1 rounded-lg bg-[#4094F7] text-white border-2 w-full h-12"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Adding...
                                        </>
                                    ) : 'Add'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
