import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import GroupsIcon from '@mui/icons-material/Groups'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard
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
          <Typography>Card test 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard
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
        <Typography>Zenin-dev</Typography>
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
    </MuiCard>
  )
}
export default Card
