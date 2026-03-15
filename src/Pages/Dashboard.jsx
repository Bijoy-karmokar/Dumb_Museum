import React from 'react';
import { useLoaderData } from 'react-router';
import { getUnwantedDataId, getWantedDataId } from '../utility/localStorage';
import { FaHeart, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const products = useLoaderData();

    const wantedIds = getWantedDataId();
    const unWantedIds = getUnwantedDataId();

    const wantedCount = wantedIds.length;
    const unwantedCount = unWantedIds.length;

    const barData =[...products].sort((a,b)=>b.views - a.views).slice(0,7).map((p)=>({
        name:p.name,
        view:p.views
    }));
    // console.log(barData);
    const pieData =[
        {
            name:"wanted",
            value:wantedCount,
            fill:"green"
        },
        {
            name:"UnWanted",
            value:unwantedCount,
            fill:"red"
        },
        {
            name:"Total",
            value:products.length,
            fill:"blue"
        }
    ]
    
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

            {/* charts */}
            <div>
                <div>
                 <ResponsiveContainer height={500}>
                 <BarChart data={barData}>
                    <XAxis dataKey={"name"}></XAxis>
                     <CartesianGrid strokeDasharray="3 3" />
                    <YAxis width={"auto"} tickFormatter={(v)=>(
                        new Intl.NumberFormat('en-US',{notation:'compact'}).format(v)
    )}></YAxis>
                    <Bar  radius={[4,4,0,0]} dataKey={"view"}></Bar>
                 </BarChart>
                 </ResponsiveContainer>
                </div>
                {/* pie chart */}
                <div>
                 <ResponsiveContainer height={500}>
                 <PieChart>
                  <Pie data={pieData} dataKey={"value"} nameKey={"name"}></Pie>
                  <Tooltip></Tooltip>
                  <Legend></Legend>
                 </PieChart>
                 </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;