import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Box from '@mui/material/Box'
import Column from './Column/Column'

function ListColumns({ columns }) {
  return (
    <SortableContext
      items={columns?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          heigth: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          padding: '10px 0',
          '&::-webkit-scrollbar-track': { m: 2 }
        }}>
        {columns?.map((column) => (
          <Column
            key={column._id}
            column={column}
          />
        ))}

        {/* Add new column */}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}>
          <Button
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'flex-start',
              pl: 2.5,
              py: 1
            }}
            startIcon={<NoteAddIcon />}>
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}
export default ListColumns
