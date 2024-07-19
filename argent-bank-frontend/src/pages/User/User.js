import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProfile } from '../../redux/reducer/profileSlice.js';
import EditName from "../../components/EditName/EditName.jsx";
import EventMoney from "../../components/EventMoney/EventMoney.jsx";
import "./User.css";
import { useNavigate } from "react-router-dom";

function User() {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.user.accounts);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async (authToken) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        if (response.status === 200) {
          const responseData = response.data;
          dispatch(setProfile(responseData));
        } else {
          console.error("Error response : ", response.statusText);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      fetchProfileData(authToken);
    }
  }, [dispatch]);

  const handleAccountClick = (account) => {
    navigate("/transactions", { state: account });
  };

  return (
    <main className="main-user">
      <EditName />
      <section className="section-card">
        <h2 className="hidden">Accounts</h2>
        {accounts.map((account) => (
          <EventMoney
            key={account.id}
            title={account.title}
            content={account.content}
            subtitle={account.subtitle}
            onClick={() => handleAccountClick(account)}
          />
        ))}
      </section>
    </main>
  );
}

export default User;
