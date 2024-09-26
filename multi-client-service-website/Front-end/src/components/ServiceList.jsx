import React, { useEffect, useState } from "react";
import { fetchServices } from "../api/api";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const response = await fetchServices();
      setServices(response.data);
    };
    getServices();
  }, []);

  return (
    <div>
      <h2>Available Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
