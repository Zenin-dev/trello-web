import { mapOrder } from '~/utils/sorts'
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight
      }}>
      <ListColumns columns={orderedColumns} />
    </Box>
  )
}
export default BoardContent
