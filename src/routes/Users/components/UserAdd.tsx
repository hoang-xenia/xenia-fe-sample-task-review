import React, { useState } from "react";
import "./styles.css";
import Button from "../../../components/Button/Button";
import { sendPost } from "../../../services/network";
import { API_PATH } from "../../../constants/route";

interface CarAddProps {
  onSuccess: () => void;
}

const CarAdd = ({ onSuccess }: CarAddProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const dataRequest = {
      name: data.get("name"),
      last_name: data.get("last_name"),
      dob: data.get("dob"),
      email_id: data.get("email_id"),
      type: data.get("type"),
    };

    await sendPost(API_PATH.USERS, dataRequest);
    setOpen(false);
    onSuccess();
    event.target.reset();
  };

  return (
    <div>
      <div className={`overlay ${open ? "show" : ""}`}></div>
      <Button onClick={() => setOpen(true)}>
        <div>Add User</div>
      </Button>
      <div>
        <div className={`form-popup ${open ? "show" : ""}`}>
          <form onSubmit={handleSubmit} className="form-container">
            <h1>Add User</h1>

            <label htmlFor="name">
              <b>Name(*)</b>
            </label>
            <input type="text" placeholder="Enter Name" name="name" required />

            <label htmlFor="last_name">
              <b>Last Name(*)</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
              required
            />

            <label htmlFor="dob">
              <b>Dob(*)</b>
            </label>
            <input
              type="text"
              placeholder="Enter Date Of Birth"
              name="dob"
              required
            />
            <label htmlFor="email_id">
              <b>Email Id(*)</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email ID"
              name="email_id"
              required
            />
            <select className="typeSelection" name="type">
              <option value="customer">Customer</option>
              <option value="internal">Internal</option>
            </select>
            <button type="submit" className="btn">
              Create
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CarAdd;
