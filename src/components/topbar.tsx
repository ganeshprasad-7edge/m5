import { useState, useEffect, useCallback } from 'react';
import searchIcon from '/search.svg';
import feedbackIcon from '/feedback.svg';
import notificationIcon from '/notification.svg';
import helpIcon from '/help.svg';
import userIcon from '/user.svg';
import { useSidebar } from '../context/SidebarContext';

interface TopBarProps {
    onSearch?: (term: string) => void;
}

export default function TopBar({ onSearch }: TopBarProps) {
    const { toggleSidebar } = useSidebar();
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    
    // Debounce search term
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500); // 500ms delay
        
        return () => clearTimeout(timer);
    }, [searchTerm]);
    
    // Call onSearch with debounced value
    useEffect(() => {
        if (onSearch) {
            onSearch(debouncedTerm);
        }
    }, [debouncedTerm, onSearch]);
    return (
        <div className="flex shadow-md shadow-[#E5E9EB] h-14 px-3 xs:px-4 sm:px-6 lg:px-10 py-2 xs:py-4 justify-between items-center">
            <div className="flex items-center">
                <button 
                    className="lg:hidden mr-3 flex flex-col justify-center items-center space-y-1"
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <span className="block w-5 h-0.5 bg-gray-600"></span>
                    <span className="block w-5 h-0.5 bg-gray-600"></span>
                    <span className="block w-5 h-0.5 bg-gray-600"></span>
                </button>
                <div className="hidden xs:flex">
                    <img src={searchIcon} alt="" className="w-5 xs:w-6 mr-1 xs:mr-2" />
                    <input 
                        type="text" 
                        className="text-xs xs:text-sm lg:text-lg text-black border-none w-24 xs:w-auto rounded-md h-8 outline-none" 
                        placeholder="Search..."
                        value={searchTerm} 
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="flex">
                <img src={feedbackIcon} alt="Feedback" className="hidden sm:block mr-5"/>
                <img src={notificationIcon} alt="Notification" className="hidden sm:block"/>
                <img src={helpIcon} alt="Help" className="hidden sm:block ml-1.5"/>
                <img src={userIcon} alt="User" className="ml-1.5"/>
            </div>
        </div>
    )
}