import React from 'react'
import Groupbookingscards from './Groupbookingscards'

export default function Groupbooking() {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center   '>
            <Groupbookingscards title="Group Booking" />
            <Groupbookingscards title="Holidays" />
            <Groupbookingscards title="Staycations" />
        </div>



    )
}
