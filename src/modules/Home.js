import { useState, useEffect } from 'react';
import BlogList from '../modules/BlogList';
import Loading from '../modules/Loading';
import useFetch from '../hooks/useFetch';
import ErrorMessage from './ErrorMessage';

const Home = () => {
    const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {isLoading && <Loading />}
            {error && <ErrorMessage errorMessage={error} />}

            {data && <BlogList blogs={data} title="All of the React Blogs." />}
        </div>
    );
}
 
export default Home;