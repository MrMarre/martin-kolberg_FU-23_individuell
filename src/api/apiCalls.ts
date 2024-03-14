import { MenuResponse } from "./models/MenuResponse";
import { OrderBodyRequest } from "./models/OrderBodyRequest";
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
