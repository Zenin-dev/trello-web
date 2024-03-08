import { API_ROOT } from '~/utils/constants'
import axios from 'axios'

// Board
export const fetchBoardDetailsAPI = async boardId => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)

  // axios se tra ve ket qua qua properties cua no la data
  return response.data
}

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/${boardId}`, updateData)

  // axios se tra ve ket qua qua properties cua no la data
  return response.data
}

// Column
export const createNewColumnAPI = async newColumnData => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, newColumnData)
  // console.log('response:', response)
  // console.log('response data:', response.data)
  return response.data
}

// Card
export const createNewCardAPI = async newCardData => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, newCardData)
  return response.data
}
