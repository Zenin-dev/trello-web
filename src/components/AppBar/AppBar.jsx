import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import Profiles from './Menus/Profiles'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import Recent from './Menus/Recent'
import Workspaces from './Menus/Workspaces'
import Typography from '@mui/material/Typography'
import { ReactComponent as trelloLogo } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box
      sx={{
        width: '100%',
        height: theme => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* <AppsIcon sx={{ color: 'white' }}></AppsIcon> */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={trelloLogo} inheritViewBox sx={{ color: 'white' }} />
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
            }}>
            Kanban Board
          </Typography>
        </Box>
        {/* Menu */}
        {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button sx={{ color: 'white' }} variant='outlined' startIcon={<LibraryAddIcon />}>
            Create
          </Button>
        </Box> */}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Search */}
        {/* <TextField
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
          id='outlined-search'
          label='Search field'
          type='text'
          size='small'
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <CloseIcon
                  fontSize='small'
                  sx={{
                    color: searchValue ? 'white' : 'transparent',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSearchValue('')}
                />
              </InputAdornment>
            )
          }}
        /> */}
        {/* Mode */}
        <ModeSelect />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Noti */}
          {/* <Tooltip title='Notification'>
            <Badge color='warning' variant='dot' size='small'>
              <NotificationsIcon sx={{ color: 'white', cursor: 'pointer' }} />
            </Badge>
          </Tooltip> */}
          {/* Help */}
          {/* <Tooltip title='Help'>
            <HelpOutlineIcon sx={{ color: 'white', cursor: 'pointer' }} />
          </Tooltip> */}
          {/* Profiles */}
          {/* <Profiles /> */}
        </Box>
      </Box>
    </Box>
  )
}
export default AppBar
