import { PRODUCTS_ENDPOINT } from "../constants/api";

export const getProducts = async () => {
  const response = await fetch(`${PRODUCTS_ENDPOINT}`);
  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }
  return response.json();

};
