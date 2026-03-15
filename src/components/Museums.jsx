import React from 'react';
import MuseumCard from './MuseumCard';

const Museums = ({museums}) => {
    // console.log(museums);
    
    return (
        <div>
            <h3 className='text-3xl text-center mt-5'>All Museums:{museums.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'> 
                {
                    museums.map(museum=><MuseumCard key={museum.id} museum={museum}></MuseumCard>)
                }
            </div>
        </div>
    );
};

export default Museums;