import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
import request from '../MovieRequests/request'

const HomeScreen = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <div className='bg-[rgba(18,18,18)]'>
            <Row
                title="Netflix Originals"
                fetchUrl={request.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now"
                fetchUrl={request.fetchTrending}
            />
            <Row
                title="Romance Movies"
                fetchUrl={request.fetchRomanceMovies}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={request.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={request.fetchHorrorMovies}
            />
            <Row
                title="Top Rated"
                fetchUrl={request.fetchDocumentaries}
            />
            </div>


        </div>
    );
};

export default HomeScreen;