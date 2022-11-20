import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";
import CarAdd from "./components/CarAdd";

import { CARS } from "../../config/colDefs";
import { ROUTES, API_PATH } from "../../constants/route";
import ICar from "../../entities/Car";
import { sendGet } from "../../services/network";

const Cars = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState<ICar[]>([]);

  const fetchData = (filter: string = "") => {
    sendGet(`${API_PATH.CARS}?filter=${filter}`)
      .then((response) => {
        const carsData = response?.data as ICar[];
        setCars(carsData);
      })
      .catch(() => {
        setCars([]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <>
        <div className="toolView">
          <Search onSubmit={(searchText) => fetchData(searchText)} />
          <CarAdd onSuccess={() => fetchData()} />
        </div>
        <Table
          data={cars}
          colDefs={CARS}
          onViewItem={(item) => navigate(`${ROUTES.CARS}/${item.id}`)}
        />
      </>
    </Layout>
  );
};
export default Cars;
