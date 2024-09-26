import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchServiceById, createBooking } from "../api/api";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    const getService = async () => {
      const response = await fetchServiceById(id);
      setService(response.data);
    };
    getService();
  }, [id]);

  const handleBooking = async () => {
    // Implement token retrieval and pass it as argument
    const token = localStorage.getItem("token");
    await createBooking({ service: id, date }, token);
    alert("Booking successful");
  };

  return service ? (
    <div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleBooking}>Book Service</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ServiceDetails;
