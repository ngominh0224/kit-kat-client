import request from 'superagent';

const URL = 'https://pure-cove-25124.herokuapp.com';
export async function getKitKats() {
  const response = await request.get(`${URL}/kitkats`);

  return response.body;
}

export async function getCategories() {
  const { body } = await request.get(`${URL}/categories`);

  return body;
}

export async function getKitKat(id) {
  const { body } = await request.get(`${URL}/kitkats/${id}`);

  return body;
}

export async function makeKitkat(oneKitKat) {
  const { body } = await request.post(`${URL}/kitkats/`).send(oneKitKat);

  return body;
}

export async function deleteKitKat(id) {
  const { body } = await request.delete(`${URL}/kitkats/${id}`);

  return body;
}

export async function updateKitKat(id, oneKitKat) {
  const { body } = await request.put(`${URL}/kitkats/${id}`).send(oneKitKat);

  return body;
}

export const getCategoryId = (kitkat, categories) =>
  categories.find((category) => kitkat.category === category.name).id;
