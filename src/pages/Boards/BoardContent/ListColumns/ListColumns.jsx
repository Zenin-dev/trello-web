import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Box from '@mui/material/Box'
import Column from './Column/Column'

function ListColumns({ columns }) {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const [newColumnTitle, setNewColumnTitle] = useState('')
  const addNewColumn = () => {
    if (!newColumnTitle) {
      // console.error('Please enter Column Title!')
      return
    }
    // console.log(newColumnTitle)
    // Call API

    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }

  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
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
        {columns?.map(column => (
          <Column key={column._id} column={column} />
        ))}

        {/* Add new column */}
        {!openNewColumnForm ? (
          <Box
            onClick={toggleOpenNewColumnForm}
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
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
        ) : (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              p: 1,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
            <TextField
              sx={{
                minWidth: '120px',
                maxWidth: '180px',
                '& label': { color: 'white' },
                '& label.Mui-focused': { color: 'white' },
                '& input': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' }
                }
              }}
              label='Enter column title'
              type='text'
              size='small'
              variant='outlined'
              autofocus
              value={newColumnTitle}
              onChange={e => {
                setNewColumnTitle(e.target.value)
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                onClick={addNewColumn}
                variant='contained'
                color='success'
                size='small'
                sx={{
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: theme => theme.palette.success.main,
                  '&:hover': { bgcolor: theme => theme.palette.success.main }
                }}>
                Add Column
              </Button>
              <CloseIcon
                onClick={toggleOpenNewColumnForm}
                fontSize='small'
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': { color: theme => theme.palette.warning.light }
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}
export default ListColumns
