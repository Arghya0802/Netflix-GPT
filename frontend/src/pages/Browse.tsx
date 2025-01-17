import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils/config";
import { ErrorMssg } from "../components/ErrorMssg";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

export const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMssg, setErrorMssg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) navigate("/sign-in");
  }, [navigate]);

  async function getUserDetails() {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/user/profile`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const { name, email } = res.data.user;

      setName(name);
      setEmail(email);
    } catch (error: any) {
      console.log(error);
      setErrorMssg(error.response.data.message);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        {errorMssg && <ErrorMssg mssg={errorMssg} />}
      </div>
      <div>
        <Button
          text="Sign Out"
          onClick={() => {
            localStorage.removeItem("token");
            dispatch(removeUser());
            navigate("/sign-in");
          }}
        />
      </div>
    </div>
  );
};
