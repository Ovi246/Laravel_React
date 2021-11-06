import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Api";
import { useDeletePostMutation } from "../services/api";
import { useHistory } from "react-router";

const Delete = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    // const [deletePost, status] = useDeletePostMutation();
    const [deletePost, { status, error }] = useDeletePostMutation();
    const history = useHistory();

    const onDeleteSubmit = async () => {
        setLoading(true);
        try {
            await deletePost(id).then((res) => {
                if (res.data.data === "Deleted Post") {
                    history.push("/");
                }
            });
        } catch {
            alert("Failed to Delete Post", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={onDeleteSubmit}
                disabled={loading}
            >
                {loading ? "LOADING..." : "Delete"}
            </button>
        </form>
    );
};

export default Delete;
