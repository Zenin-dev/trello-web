import { isEmpty } from 'lodash'
import { generatePlaceholderCard } from '~/utils/formaters'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI } from '~/apis'
import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    // Tam thoi fix cung board Id. Chuan dung react-router-dom de lay Id tu URL ve
    const boardId = '65e9974d800f2300e1b93e52'

    // Call API
    fetchBoardDetailsAPI(boardId).then(board => {
      // Handle drag to empty column
      board.columns.forEach(column => {
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]
        }
      })

      setBoard(board)
    })
  }, [])

  // Func call API create new Column and set new state of Board
  const createNewColumn = async newColumnData => {
    const createdColumn = await createNewColumnAPI({ ...newColumnData, boardId: board._id })
    createdColumn.cards = [generatePlaceholderCard(createdColumn)]
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]
    // Update board state
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)
    setBoard(newBoard)
  }

  // Func call API create new Card and set new state of Board
  const createNewCard = async newCardData => {
    const createdCard = await createNewCardAPI({ ...newCardData, boardId: board._id })

    // Update board state
    const newBoard = { ...board }
    const columnOfCreateCard = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnOfCreateCard) {
      columnOfCreateCard.cards.push(createdCard)
      columnOfCreateCard.cardOrderIds.push(createdCard._id)
    }
    setBoard(newBoard)
  }

  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <AppBar />
        <BoardBar board={board} />
        <BoardContent board={board} createNewColumn={createNewColumn} createNewCard={createNewCard} />
      </Container>
    </>
  )
}
export default Board
