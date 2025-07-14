function StatsCards({stats}) {
    const {streak, avgMood, total} = stats;

    const cardClasses = 'bg-white p-4 rounded-lg shadow  w-full sm:w-1/3';

    return (
        <div className= 'flex flex-col sm:flex-row justify-center gap-4 my-6 w-full max-w-4xl'>
            
            <div className= {cardClasses}>
                <h3 className='text-sm text-gray-800 font-bold'>📆 Current Streak</h3>
                <p className='text-2xl font-bold text-orange-600'>{streak} 🔥</p>
                <p className="text-gray-400">days in a row</p>
            </div>

            <div className={cardClasses}>
                <h3 className='text-sm text-gray-800 font-bold'>📈 Average Mood</h3>
                <p className='text-2xl font-bold text-blue-600'>{avgMood} 😃</p>
                <p className="text-gray-400">out of 10</p>
            </div>

            <div className={cardClasses}>
                <h3 className='text-sm text-gray-500'>📆 Total Check-ins</h3>
                <p className='text-2xl font-bold text-green-600'>{total}</p>
                <p className="text-gray-400">entries recorded</p>
            </div>
        </div>
    );
}

export default StatsCards;