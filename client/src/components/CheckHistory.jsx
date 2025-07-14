
function CheckHistory({entries = []}) {
    return (
        <div className= 'bg-white p-6 mt-6 rounded-xl shadow max-w-4xl w-full'>
            <p className="">📆</p>
            <h3 className='text-xl font-semibold mb-4'>Previous Check-ins</h3>
            {entries.length === 0 ? (
                <p className='text-gray-500'> Start your wellness journey by completing your first daily check-in!</p>
            ): (
                <ul className='space-y-4 max-h-[300px] overflow-y-auto'>
                    {entries.map((entry, index)=>(
                        <li key={index} className='border-b pb-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm text-gray-600'>{new Date(entry.date).toLocaleDateString()}</p>
                                <p className='text-sm font-medium'> 
                                Mood"{entry.mood}/10
                                </p>
                            </div>

                            <p className='text-sm text-gray-700 mt-1'>Stress: {entry.stress}</p>
                            <p className='text-sm text-gray-800 italic mt-1'>"{entry.feelings}"</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


export default CheckHistory;