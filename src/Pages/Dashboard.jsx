import React from 'react';
import { useLoaderData } from 'react-router';
import { getUnwantedDataId, getWantedDataId } from '../utility/localStorage';
import { FaHeart, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

const Dashboard = () => {
    const products = useLoaderData();

    const wantedIds = getWantedDataId();
    const unWantedIds = getUnwantedDataId();

    const wantedCount = wantedIds.length;
    const unwantedCount = unWantedIds.length;
    return (
        <div>
            <h2 className='font-newsReader text-5xl text-center'>DashBoard</h2>
            <div className='flex gap-5'>
                <div className='stat rounded-box bg-base-200'>
                    <div className='stat-figure'>
                     <FaHeart></FaHeart>
                    </div>
                    <div className='stat-title'>Wanted Idea</div>
                    <div className='stat-value'>{wantedCount}</div>
                </div>
                <div className='stat rounded-box bg-base-200'>
                    <div className='stat-figure'>
                     <FaThumbsDown></FaThumbsDown>
                    </div>
                    <div className='stat-title'>Unwanted Idea</div>
                    <div className='stat-value'>{unwantedCount}</div>
                </div>
                <div className='stat rounded-box bg-base-200'>
                    <div className='stat-figure'>
                     <FaThumbsUp></FaThumbsUp>
                    </div>
                    <div className='stat-title'>Total</div>
                    <div className='stat-value'>{products.length}</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;