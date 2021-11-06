import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import api from '../Api';

const Edit = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const [topicId, setTopicId] = useState('');


    const onEditSubmit = async() => {
        setLoading(true);
        try{
            await api.updatePost({
                title, body, userId, topicId,
            },id)
        }
        catch{
            alert('Failed to Update Post');
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() =>{
        api.onePost(id).then(res =>{
            const result = res.data;
            const post = result.data;
            setTitle(post.title);
            setBody(post.body);
            setUserId(post.user_id);
            setTopicId(post.topic_id);
        });
    }, []);

    return (
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" 
                        value={title}
                        onChange= {e=> setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea className='form-control'
                        value={body}
                        onChange= {e=> setBody(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" className="form-control"
                        value={userId}
                        onChange= {e=> setUserId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Topic ID</label>
                    <input type="text" className="form-control"
                        value={topicId}
                        onChange= {e=> setTopicId(e.target.value)}
                    />
                </div>
                    <button type="submit" className="btn btn-primary"
                        onClick={onEditSubmit}
                        disabled={loading}
                    >{loading ? 'LOADING...' : 'Edit'}</button>
            </form>
    );

};


export default Edit;