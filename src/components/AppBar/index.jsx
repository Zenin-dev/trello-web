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
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'

function AppBar() {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon
          px={2}
          sx={{ color: 'primary.main' }}></AppsIcon>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={trelloLogo}
            inheritViewBox
            sx={{ color: 'primary.main' }}
          />
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main'
            }}>
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />

        <Button variant='outlined'>Create</Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-search'
          label='Search field'
          type='search'
          size='small'
        />
        <ModeSelect />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title='Notification'>
            <Badge
              color='secondary'
              variant='dot'
              size='small'>
              <NotificationsIcon
                sx={{ color: 'primary.main', cursor: 'pointer' }}
              />
            </Badge>
          </Tooltip>
          <Tooltip title='Help'>
            <HelpOutlineIcon
              sx={{ color: 'primary.main', cursor: 'pointer' }}
            />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </Box>
  )
}
export default AppBar
