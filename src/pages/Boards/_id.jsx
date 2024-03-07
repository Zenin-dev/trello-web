import { fetchBoardDetailsAPI } from '~/apis'
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
      console.log('board: ', board)
      setBoard(board.board)
    })
  }, [])
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <AppBar />
        <BoardBar board={board} />
        <BoardContent board={board} />
      </Container>
    </>
  )
}
export default Board
