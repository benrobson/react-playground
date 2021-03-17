import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Author');
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit= (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added.");
            setLoading(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label>Blog Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Greg">Greg</option>
                    <option value="Slegg">Slegg</option>
                    <option value="Splegg">Splegg</option>
                    <option value="David">David</option>
                </select>

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;