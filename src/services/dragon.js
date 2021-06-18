import api, { endpoints } from './index';

export async function getListDragons() {
  const { get } = api;
  return get(endpoints.dragon);
}

export async function createDragon(data) {
  const { post } = api;
  return post(endpoints.dragon, data);
}

export async function updateDragon(id, data) {
  const { put } = api;
  return put(endpoints.dragon.concat(`${id}`), data);
}

export async function deleteDragon(id) {
  const { delete: del } = api;
  return del(endpoints.dragon.concat(`${id}`));
}
