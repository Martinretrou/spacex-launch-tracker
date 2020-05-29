const baseUrl = 'https://api.spacexdata.com/v3'

export const getUpcomingLaunches = async (instance) => {
  const launches = await instance.$axios.$get(`${baseUrl}/launches/upcoming`)
  return launches
}

export const getPastLaunches = async (instance, { limit = 50 }) => {
  const launches = await instance.$axios.$get(
    `${baseUrl}/launches/past?limit=${limit}`
  )
  return launches
}

export const getNextLaunch = async (instance) => {
  const launch = await instance.$axios.$get(`${baseUrl}/launches/next`)
  return launch
}

export const getLatestLaunch = async (instance) => {
  const launch = await instance.$axios.$get(`${baseUrl}/launches/latest`)
  return launch
}

export const getAllLaunches = async (instance) => {
  const launch = await instance.$axios.$get(`${baseUrl}/launches`)
  return launch
}

export const getOneLaunch = async (instance, flightNumber) => {
  const launch = await instance.$axios.$get(
    `${baseUrl}/launches/${flightNumber}`
  )
  return launch
}
