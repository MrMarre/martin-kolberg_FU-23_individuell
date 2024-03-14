import { MenuResponse } from "./models/MenuResponse";
import { OrderBodyRequest } from "./models/OrderBodyRequest";
import { SignupRequest } from "./models/SignupRequest";
import { LoginRequest } from "./models/LoginRequest";
const baseURL = `https://airbean-api-xjlcn.ondigitalocean.app/api`;

export const postOrderSubmit = async (
  body: OrderBodyRequest
): Promise<string> => {
  const errorMessage =
    "Nahajj diu, här hittade vi ingen order. Vänligen försök igen.";

  try {
    const response = await fetch(`${baseURL}/beans/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    return data.orderNr;
  } catch (err) {
    return Promise.reject(errorMessage);
  }
};

export const getMenuList = async (): Promise<MenuResponse> => {
  try {
    const response = await fetch(`${baseURL}/beans`);
    const data: MenuResponse = await response.json();

    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getOrderEta = async (orderNumber: string): Promise<number> => {
  try {
    const response = await fetch(
      `${baseURL}/beans/order/status/${orderNumber}`
    );
    const data = await response.json();
    return data.eta;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postSignup = async (request: SignupRequest): Promise<boolean> => {
  try {
    const response = await fetch(`${baseURL}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    const data = await response.json();
    console.log(data);
    return data.success;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postSignIn = async (request: LoginRequest): Promise<string> => {
  try {
    const response = await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    const data = await response.json();
    console.log(data);
    return data.token;
  } catch (err) {
    return Promise.reject(err);
  }
};
