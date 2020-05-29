const baseUrl = 'https://api.spacexdata.com/v3'

export const getAllMissions = async (instance) => {
  const missions = await instance.$axios.$get(`${baseUrl}/missions`)
  return missions
}

export const getOneMission = async (instance, id) => {
  const mission = await instance.$axios.$get(`${baseUrl}/missions/${id}`)
  return mission
}
