import {UserButton, useUser} from '@clerk/clerk-react'

function Navbar({activePage, setActivePage}){
     const { isLoaded, user } = useUser();
    return (
        <nav className='bg-white shadow p-4 mr-4 ml-4 flex justify-between items-center'>
            {/*logo of the application*/}
            <div className='text-xl font-bold text-blue-600'>Myndshift Therapy</div>

            <div className='space-x-'>
                <button  
                    onClick={()=> setActivePage('dashboard')}
                    className={`px-4 py-2 w-[120px] rounded ${activePage === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} `}
                >
                    Dashboard
                </button>
                <button
                    onClick={()=> setActivePage('checkin')}
                    className={`px-4 py-2 w-[120px]  rounded ${activePage === 'checkin' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                    Check- In
                </button>
            </div>
        <div className="flex items-center space-x-2"> {/* New div to hold user name and button */}
                {/* Conditionally render user's name */}
                {isLoaded && user && (
                    <span className="text-gray-800 font-medium">
                     {user.firstName || user.username || user.emailAddresses[0]?.emailAddress}
                    </span>
                )}
                <UserButton className='large-user-button' afterSignOutUrl='/sign-in' />
            </div>
        </nav>
    )
}

export default Navbar;