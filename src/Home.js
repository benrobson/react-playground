
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import Loading from './Loading';
import Error from './Error';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogss')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource.');
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                console.log(err.message);
            })
    }, []);

    return (
        <div className="home">
            {isLoading && <Loading />}
            {error && <Error errorMessage={error} />}
            {blogs && <BlogList blogs={blogs} title="All of the React Blogs." />}
        </div>
    );
}
 
export default Home;