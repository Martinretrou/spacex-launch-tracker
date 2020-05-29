const baseUrl = 'https://api.spacexdata.com/v3'

export const getAllRockets = async (instance) => {
  const rockets = await instance.$axios.$get(`${baseUrl}/rockets`)
  return rockets
}

export const getOneRocket = async (instance, id) => {
  const rocket = await instance.$axios.$get(`${baseUrl}/rockets/${id}`)
  return rocket
}
