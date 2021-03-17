import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error <br />{error}</div>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <small>Written by {blog.author}</small>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;