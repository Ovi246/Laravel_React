import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../Api";
import { useAddPostMutation } from "../services/api";

const Add = () => {
    const [addPost, { isSuccess, isLoading, isError }] = useAddPostMutation();
    const [topics, setTopics] = useState("");
    const [state, setState] = useState({
        title: "",
        body: "",
        topicId: "",
    });
    const { title, body, topicId } = state;
    let allTopics = [...topics];
    let history = useHistory();

    useEffect(() => {
        api.getAllTopics().then((res) => {
            const result = res.data;
            setTopics(result.data);
        });
    }, []);

    console.log(isSuccess, isLoading, isError);

    const onAddSubmit = (e) => {
        e.preventDefault();
        // dispatch(addPost(state, history));
        // history.push('/');
        addPost(state).then((res) => {
            // console.log(res);
            if (res.data.data === "Post Created") {
                history.push("/");
            }
        });
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <form>
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Body</label>
                <textarea
                    className="form-control"
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="form-group">
                <label>Topic ID</label>
                <select
                    value={topicId}
                    name="topicId"
                    onChange={handleInputChange}
                >
                    {allTopics.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                            {topic.name}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={onAddSubmit}
            >
                {isLoading ? "LOADING..." : "Add"}
            </button>
        </form>
    );
};

export default Add;
