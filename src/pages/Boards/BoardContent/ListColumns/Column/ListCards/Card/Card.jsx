import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import GroupsIcon from '@mui/icons-material/Groups'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

function Card({ card }) {
  const shouldShowCardActions = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    )
  }

  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
        />
      )}

      <CardContent
        sx={{
          p: 1.5,
          '&:last-child': { p: 1.5 }
        }}>
        <Typography>{card?.title}</Typography>
      </CardContent>

      {/* card actions */}
      {shouldShowCardActions() && (
        <CardActions sx={{ p: '0 4px 8px' }}>
          {/* members */}
          {!!card?.memberIds?.length && (
            <Button
              size='small'
              startIcon={<GroupsIcon />}>
              {card.memberIds.length}
            </Button>
          )}

          {/* comments */}
          {!!card?.comments?.length && (
            <Button
              size='small'
              startIcon={<ModeCommentIcon />}>
              {card.comments.length}
            </Button>
          )}
          {/* attachments */}
          {!!card?.attachments?.length && (
            <Button
              size='small'
              startIcon={<AttachmentIcon />}>
              {card.attachments.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}
export default Card