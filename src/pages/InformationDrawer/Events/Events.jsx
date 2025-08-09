import React from 'react';
import NoInformationFound from '../../NoInfomationFound/NoInfomationFound';

const Events = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center  text-[#020085] pt-5 font-roboto">Events</h2>
            <div className='text-[#020085] w-[120px] mt-2  mx-auto pb-8'>
                <hr className="border-t-2 border-[#666] ml-[15px]" />
                <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
            </div>
            <NoInformationFound />
        </div>
    );
};

export default Events;