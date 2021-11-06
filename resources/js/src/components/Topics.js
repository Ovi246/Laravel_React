import React, { useEffect, useState } from "react";
import { useGetTopicsQuery } from "../services/api";
import { useFollowTopicMutation } from "../services/api";
import { useGetPostsQuery } from "../services/api";
import axios from "axios";
import api from "../Api";

const Topics = () => {
    const [followings, setFollowings] = useState([]);
    const posts = useGetPostsQuery();
    const { data: topicsResult = [], isFetching: topicsFetching } =
        useGetTopicsQuery();

    const topics = topicsResult?.data;

    const [followTopic, { status }] = useFollowTopicMutation();
    const [followStatus, setFollowStatus] = useState(false);

    useEffect(() => {
        // fetch ('http://localhost/user/topic_followings')
        //     .then((response) => response.json())
        //     .then((findresponse) => {
        //         // console.log(findresponse.followings.map(id => id.id), 'data');
        //         setFollowings(findresponse.followings.map(id => id.id));
        //     });
        const fetchData = async function () {
            try {
                const response = await axios.get(
                    "http://localhost/user/topic_followings"
                );
                if (response.status === 200) {
                    setFollowings(response.data.data.map((id) => id.id));
                }
            } catch (error) {
                throw error;
            } finally {
            }
        };
        fetchData();
    }, [followStatus]);

    const follow = (topicName, e) => {
        e.preventDefault();
        const follow = async () => {
            const response = await followTopic(topicName);
            console.log(response);
            if (response.data === 201) {
                // updatePosts();
                // updateFollowings();
                setFollowStatus(true);
                posts.refetch();
            }
        };
        follow();
        setFollowStatus(false);
    };

    return (
        <div>
            {topicsFetching ? (
                <div className="article">
                    <h1>Loading...</h1>
                </div>
            ) : topics ? (
                topics.map((topic) => {
                    let buttonText = "";
                    let onClickFunction = null;

                    // console.log('true');
                    if (followings.includes(topic.id)) {
                        onClickFunction = (e) => follow(topic.name, e);
                        buttonText = "UnFollow";
                        console.log("true");
                    } else {
                        console.log("false");
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

export default Topics;
