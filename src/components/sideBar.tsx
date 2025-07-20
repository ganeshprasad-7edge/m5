// SideBar.tsx
import overviewIcon from '/overview.svg';
import productsIcon from '/products.svg';
import balancesIcon from '/balances.svg';
import paymentsIcon from '/payments.svg';
import connectedAccountsIcon from '/connected_accounts.svg';
import itemsIcon from '/items.svg';
import readersIcon from '/readers.svg';
import reportsIcon from '/reports.svg';
import issuedCardsIcon from '/issued_cards.svg';
import developersIcon from '/developers.svg';
import viewTestDataIcon from '/view_test_data.svg';
import settingsIcon from '/settings.svg';

export default function SideBar() {
    return (
        <div className="h-full flex flex-col bg-[#F6F8F9] pr-4 lg:w-[280px] md:w-[240px]">
            <div className='pl-[26px] pt-[21px]'>
                <h1 className='text-[18px] font-bold'>FakeApp</h1>
            </div>
            
            {/* First set of items */}
            <nav className='flex flex-col flex-1 pl-[26px] pt-[21px]'>
                <ul className='flex flex-col h-full'>
                    <li className='flex py-2'>
                        <img src={overviewIcon} alt="Overview" className='px-2' />
                        <div>Overview</div>
                    </li>

                    <li className='flex bg-[#D7EDFF] py-2 rounded-lg'>
                        <img src={productsIcon} alt="Products" className='px-2' />
                        <div>Products</div>
                    </li>
                    <li className='pl-10 py-2'>Reviews</li>
                    <li className='pl-10 py-2'>Disputes</li>
                    <li className='pl-10 py-2'>Top-ups</li>
                    <li className='pl-10 py-2'>Check deposits</li>
                    <li className='pl-10 py-2'>Top-ups</li>
                    <li className='pl-10 py-2 mb-3'>All transactions</li>
                    <li className='flex py-2'>
                        <img src={balancesIcon} alt="Balances" className='px-2' />
                        <div>Balances</div>
                    </li>
                    <li className='flex py-2'>
                        <img src={paymentsIcon} alt="Payments" className='px-2' />
                        <div>Payments</div>
                    </li>
                    <li className='flex py-2'>
                        <img src={connectedAccountsIcon} alt="Connected accounts" className='px-2' />
                        <div>Connected accounts</div>
                    </li>
                    <li className='flex py-2'>
                        <img src={itemsIcon} alt="Items" className='px-2' />
                        <div>Items</div>
                    </li>
                    <li className='flex py-2'>
                        <img src={readersIcon} alt="Readers" className='px-2' />
                        <div>Readers</div>
                    </li>
                    <li className='flex py-2'>
                        <img src={reportsIcon} alt="Reports" className='px-2' />
                        <div>Reports</div>
                    </li>
                    <li className='flex py-2'>
                        <img src={issuedCardsIcon} alt="Issued cards" className='px-2' />
                        <div>Issued cards</div>
                    </li>
                    <div className="mt-14">
                        <li className='flex py-2'>
                            <img src={developersIcon} alt="Developers" className='px-2' />
                            <div>Developers</div>
                        </li>
                        <li className='flex py-2'>
                            <img src={viewTestDataIcon} alt="View test data" className='px-2' />
                            <div>View test data</div>
                        </li>
                        <li className='flex py-2'>
                            <img src={settingsIcon} alt="Settings" className='px-2' />
                            <div>Settings</div>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}