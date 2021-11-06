import { Button } from "bootstrap";
import { cleanData, post } from "jquery";
import React, { useEffect, useState, useRef, useReducer } from "react";
import { Link } from "react-router-dom";
import api from "../Api";
import { useDispatch } from "react-redux";
import { useGetPostsQuery } from "../services/api";

import Topics from "./Topics";
import axios from "axios";

const Home = () => {
    // const [topics, setTopics] = useState([]);
    // const [followings, setFollowings] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const dispatch = useDispatch();

    const { data, isLoading, error } = useGetPostsQuery();

    const posts = data?.posts;

    // useEffect(() => {

    //     // api.getAllPosts().then(res =>{
    //     //     const result = res.data;
    //     //     setPosts(result.data);})
    //     // });
    //     // fetch('http://localhost/dashboard')
    //     //     .then((response) => response.json())
    //     //     .then((findresponse) => {
    //     //         setPosts(findresponse.posts);
    //     //     });

    //         const fetchData = async function () {
    //           try {
    //             setLoading(true);
    //             const response = await axios.get("http://localhost/dashboard");
    //             if (response.status === 200) {
    //               setPosts(response.data.posts);
    //             }
    //           } catch (error) {
    //             throw error;
    //           } finally {
    //             setLoading(false);
    //           }
    //         };
    //         fetchData();

    //         return function cleanup() {
    //           setPosts(null);
    //         };

    // }, []);

    // useEffect(() =>{
    //   console.log(isLoading);
    //   console.log(data);
    // }, [])

    // useEffect(() => {
    //     // fetch('http://localhost/topics')
    //     //     .then((response) => response.json())
    //     //     .then((findresponse) => {
    //     //         setTopics(findresponse.data);
    //     //     });

    //     const fetchData = async function () {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get("http://localhost/topics");
    //             if (response.status === 200) {
    //                 setTopics(response.data.data);
    //             }
    //         } catch (error) {
    //             throw error;
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     // fetch ('http://localhost/user/topic_followings')
    //     //     .then((response) => response.json())
    //     //     .then((findresponse) => {
    //     //         // console.log(findresponse.followings.map(id => id.id), 'data');
    //     //         setFollowings(findresponse.followings.map(id => id.id));
    //     //     });
    //     const fetchData = async function () {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get(
    //                 "http://localhost/user/topic_followings"
    //             );
    //             if (response.status === 200) {
    //                 setFollowings(response.data.followings.map((id) => id.id));
    //             }
    //         } catch (error) {
    //             throw error;
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const updatePosts = async () => {
        const result = await fetch("http://localhost/dashboard").then(
            (response) => response.json()
        );
        setPosts(result.posts);
    };

    const updateFollowings = async () => {
        const response = await axios.get(
            "http://localhost/user/topic_followings"
        );
        setFollowings(response.data.followings.map((id) => id.id));
        // renderTopics();
    };

    const renderTopics = () => {
        return (
            <div>
                {isFetching ? (
                    <div className="article">
                        <h1>Loading...</h1>
                    </div>
                ) : topics ? (
                    topics.map((topic) => {
                        let buttonText = "";
                        let onClickFunction = null;

                        if (followings.includes(topic.id)) {
                            // console.log('true');
                            onClickFunction = (e) => follow(topic.name, e);
                            buttonText = "UnFollow";
                        } else {
                            // console.log('false');
                            onClickFunction = (e) => follow(topic.name, e);
                            buttonText = "Follow";
                        }
                        return (
                            <div key={topic.id}>
                                <button onClick={onClickFunction}>
                                    {buttonText}
                                </button>
                                <h1>{topic.name}</h1>
                            </div>
                        );
                    })
                ) : null}
            </div>
        );
    };

    // const follow = (topicName, e) => {
    //     e.preventDefault();
    //     const follow = async () => {
    //         const response = await api.followTopic(topicName);
    //         if (response.status === 201) {
    //             // updatePosts();
    //             // updateFollowings();
    //         }
    //     };
    //     follow();
    // };

    return (
        <div className="app">
            <div className="header">
                <img
                    className="header__image"
                    src="https://cdn.freebiesupply.com/images/large/2x/medium-icon-white-on-black.png"
                    alt=""
                />
                <div className="button">
                    <Link className="btn btn-success mr-2" to={`login`}>
                        Login
                    </Link>
                    <Link className="btn btn-success mr-2" to={`signup`}>
                        Signup
                    </Link>
                </div>
            </div>
            <div className="line">
                {isLoading ? (
                    <div className="article">
                        <h1>Loading...</h1>
                    </div>
                ) : posts ? (
                    posts.map((post) => (
                        <div className="article" key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            <Link className="btn btn-success mr-2" to={`add`}>
                                Add
                            </Link>
                            <Link
                                className="btn btn-warning ml-2"
                                to={`edit/${post.id}`}
                            >
                                Edit
                            </Link>
                            <Link
                                className="btn btn-warning ml-2"
                                to={`delete/${post.id}`}
                            >
                                Delete
                            </Link>
                        </div>
                    ))
                ) : null}
                <div className="followings">
                    <Topics />
                </div>
            </div>
        </div>
    );
};

export default Home;
