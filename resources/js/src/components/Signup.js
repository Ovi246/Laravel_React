import React, { useState } from "react";
import api from "../Api";
import { useHistory } from "react-router-dom";
import { useRegisterMutation } from "../services/api";

const Signup = () => {
    const history = useHistory();
    const [register, { status }] = useRegisterMutation();
    const [state, setState] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const { name, username, email, password, password_confirmation } = state;
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [password_confirmation, setPasswordConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        setLoading(true);
        try {
            await register(state);
            // console.log(status);
            // history.push('/');
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div className="Signup">
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        name="username"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="text"
                        className="form-control"
                        value={password}
                        name="password"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password-Confirm</label>
                    <input
                        type="text"
                        className="form-control"
                        value={password_confirmation}
                        name="password_confirmation"
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSignup}
                    disabled={loading}
                >
                    {loading ? "LOADING..." : "Signup"}
                </button>
            </form>
        </div>
    );
};

export default Signup;
