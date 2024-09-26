import React from "react";
import AuthForm from "./AuthForm";
import ServiceList from "./ServiceList";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Multi-client Service Platform</h1>
      <AuthForm />
      <ServiceList />
    </div>
  );
};

export default Dashboard;
