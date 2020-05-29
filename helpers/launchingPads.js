const baseUrl = 'https://api.spacexdata.com/v3'

export const getAllLandpads = async (instance) => {
  const landpads = await instance.$axios.$get(`${baseUrl}/landpads`)
  return landpads
}

export const getOneLandpad = async (instance, id) => {
  const landpad = await instance.$axios.$get(`${baseUrl}/landpads/${id}`)
  return landpad
}
