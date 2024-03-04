import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { useState } from 'react'
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { mapOrder } from '~/utils/sorts'
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { useEffect } from 'react'
function BoardContent({ board }) {
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 }
  // })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 }
  })
  const sensor = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setorderedColumns] = useState([])

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      '_id'
    )
    setorderedColumns(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    console.log(event)
    const { active, over } = event
    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // Sau xu ly Api
      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)
      setorderedColumns(dndOrderedColumns)
    }
  }
  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensor}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight
        }}>
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}
export default BoardContent
