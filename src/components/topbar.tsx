import searchIcon from '/search.svg';
import feedbackIcon from '/feedback.svg';
import notificationIcon from '/notification.svg';
import helpIcon from '/help.svg';
import userIcon from '/user.svg';

export default function TopBar() {
    return (
        <div className="flex shadow-md shadow-[#E5E9EB] h-14 px-10 py-4 justify-between">
            <div className="flex">
                <img src={searchIcon} alt="" className="w-6 mr-2" />
                <input className="text-sm text-gray-500 broder-none" placeholder="Search..."/>
            </div>
            <div className="flex">
                <img src={feedbackIcon} alt="Feedback" className="mr-5"/>
                <img src={notificationIcon} alt="Notification"/>
                <img src={helpIcon} alt="Help" className="ml-1.5"/>
                <img src={userIcon} alt="User" className="ml-1.5"/>
            </div>
        </div>
    )
}