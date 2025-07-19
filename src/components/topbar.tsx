
export default function TopBar() {
    return (
        <div className="flex shadow-md shadow-[#E5E9EB] h-14 px-10 py-4 justify-between">
            <div className="flex">
                <img src="search.svg" alt="" className="w-6 mr-2" />
                <input className="text-sm text-gray-500 broder-none" placeholder="Search..."/>
            </div>
            <div className="flex">
                <img src="feedback.svg" alt="Feedback" className="mr-5"/>
                <img src="notification.svg" alt="Notification"/>
                <img src="help.svg" alt="Help" className="ml-1.5"/>
                <img src="user.svg" alt="User" className="ml-1.5"/>
            </div>
        </div>
    )
}