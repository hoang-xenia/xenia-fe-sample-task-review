import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/Table/Table";
import Search from "../../components/Search/Search";
import { USERS } from "../../config/colDefs";
import { ROUTES, API_PATH } from "../../constants/route";
import IUser from "../../entities/User";
import { sendGet } from "../../services/network";
import UserAdd from "./components/UserAdd";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  const fetchData = (filter: string = "") => {
    sendGet(`${API_PATH.USERS}?filter=${filter}`)
      .then((response) => {
        const usersData = response?.data as IUser[];
        setUsers(usersData);
      })
      .catch(() => {
        setUsers([]);
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
          <UserAdd onSuccess={() => fetchData()} />
        </div>
        <Table
          data={users}
          colDefs={USERS}
          onViewItem={(item) => navigate(`${ROUTES.USERS}/${item.id}`)}
        />
      </>
    </Layout>
  );
};
export default Users;
