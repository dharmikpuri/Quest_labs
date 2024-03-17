import React from 'react'
import { useDrag } from 'react-dnd'
import { Box, Text } from '@chakra-ui/react'

const Task = ({ id, text, status }) => {
    console.log(status);
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id, status },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <Box
      ref={drag}
      bg="#FFF"
      borderRadius="1rem"
      p="1.5rem"
      opacity={isDragging ? 0.5 : 1}
      cursor="move"
    >
      <Text fontSize="1rem" fontWeight={600}>{text}</Text>
    </Box>
  )
}

export default Task
