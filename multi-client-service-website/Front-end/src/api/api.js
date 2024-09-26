import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = (userData) => api.post("/auth/register", userData);
export const loginUser = (userData) => api.post("/auth/login", userData);
export const createService = (serviceData, token) =>
  api.post("/services", serviceData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const fetchServices = () => api.get("/services");
export const fetchServiceById = (id) => api.get(`/services/${id}`);
export const createBooking = (bookingData, token) =>
  api.post("/bookings", bookingData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const fetchBookings = (token) =>
  api.get("/bookings", { headers: { Authorization: `Bearer ${token}` } });
