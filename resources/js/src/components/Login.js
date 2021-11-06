import React, { useState } from "react";
import api from "../Api";
import { useHistory } from "react-router-dom";
import { useLoginMutation } from "../services/api";
import { useDispatch } from "react-redux";
// import { axiosApi } from "../api";
import { setToken, setUser } from "../slices/authSlice";

const Login = () => {
    const history = useHistory();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [login, { status }] = useLoginMutation();
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const { email, password } = state;
    const dispatch = useDispatch();

    const handleLogin = async () => {
        setLoading(true);
        try {
            // await axios
            //     .get("http://localhost/sanctum/csrf-cookie")
            //     .then((response, { cookie }) => {
            //         console.log(response, cookie);
            //         login(state).then((res) => {
            //             console.log(res);
            //         });
            //     });
            const response = await login(state);
            dispatch(setToken(response.data.token));
            dispatch(setUser(response.data.user));

            history.push("/");
            console.log(status, response);
        } catch (error) {
            console.log(error);
            alert("Failed to Login");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div className="login">
            <form>
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
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "LOADING..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;
