import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import GroupsIcon from '@mui/icons-material/Groups'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import AddCardIcon from '@mui/icons-material/AddCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Tooltip from '@mui/material/Tooltip'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import React from 'react'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
const BOX_COLUMN_MAX_HEIGHT = (theme) =>
  `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`

function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight
      }}>
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
        {/* Box column */}
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: BOX_COLUMN_MAX_HEIGHT
          }}>
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Typography
              variant='h6'
              sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
              Column Title
            </Typography>
            <Box>
              <Tooltip title='More options'>
                <ExpandMoreIcon
                  sx={{ color: 'text.primaty', cursor: 'pointer' }}
                  id='basic-column-dropdown'
                  aria-controls={
                    open ? 'basic-menu-column-dropdown' : undefined
                  }
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id='basic-menu-column-dropdown'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}>
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          {/* Box List Cards */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: '0 5px',
              m: '0 5px',
              gap: 1,
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} -
                ${theme.spacing(5)} -
                ${COLUMN_HEADER_HEIGHT} -
                ${COLUMN_FOOTER_HEIGHT}
                )`,
              '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
              '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
            }}>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardMedia
                sx={{ height: 140 }}
                image='https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90byUyMGZhY2Vib29rfGVufDB8fDB8fHww'
                title='green iguana'
              />
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography> Zenin-dev</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px' }}>
                <Button
                  size='small'
                  startIcon={<GroupsIcon />}>
                  20
                </Button>
                <Button
                  size='small'
                  startIcon={<ModeCommentIcon />}>
                  15
                </Button>
                <Button
                  size='small'
                  startIcon={<AttachmentIcon />}>
                  12
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
              }}>
              <CardContent
                sx={{
                  p: 1.5,
                  '&:last-child': { p: 1.5 }
                }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default BoardContent
