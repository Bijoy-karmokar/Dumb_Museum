import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import Museums from '../components/Museums';

const Home = () => {
    const museums = useLoaderData();
    // console.log(museums);
    
    return (
        <div>
          <Banner></Banner>
          <Museums museums={museums}></Museums>
        </div>
    );
};

export default Home;