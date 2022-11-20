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
      brand: data.get("brand"),
      build: data.get("build"),
      year: Number(data.get("year")),
      mode: data.get("mode"),
      geolocation: data.get("geolocation"),
      day_price: Number(data.get("day_price")),
      owner: 2,
      is_featured: false,
    };
    await sendPost(API_PATH.CARS, dataRequest);
    setOpen(false);
    onSuccess();
    event.target.reset();
  };
  return (
    <div>
      <div className={`overlay ${open ? "show" : ""}`}></div>
      <Button onClick={() => setOpen(true)}>
        <div>Add Car</div>
      </Button>
      <div>
        <div className={`form-popup ${open ? "show" : ""}`}>
          <form onSubmit={handleSubmit} className="form-container">
            <h1>Add Car</h1>

            <label htmlFor="brand">
              <b>Brand(*)</b>
            </label>
            <input
              type="text"
              placeholder="Enter Brand"
              name="brand"
              required
            />

            <label htmlFor="build">
              <b>Build(*)</b>
            </label>
            <input
              type="text"
              placeholder="Enter Build"
              name="build"
              required
            />

            <label htmlFor="year">
              <b>Additional Info(*)</b>
            </label>
            <input type="text" placeholder="Enter Year" name="year" required />
            <input type="text" placeholder="Enter Mode" name="mode" required />
            <input
              type="text"
              placeholder="Enter Geolocation"
              name="geolocation"
              required
            />
            <input
              type="text"
              placeholder="Enter Day Price"
              name="day_price"
              required
            />
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
