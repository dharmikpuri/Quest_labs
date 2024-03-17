import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Task from './Task.jsx';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Project A', status: 'To Do' },
    { id: 2, text: 'Project B', status: 'In Progress' },
    { id: 3, text: 'Project C', status: 'To Do' },
    // Add more tasks as needed
  ]);

  const moveTask = (dragIndex, hoverIndex, status) => {
    console.log('Moving task from', tasks[dragIndex].status, 'to', status);
    console.log('dragIndex:', dragIndex);
    console.log('hoverIndex:', hoverIndex);
    console.log('status:', status);

    // Update tasks array based on drag and drop
    // You need to implement this part
    const newTasks = [...tasks];
    // Modify newTasks array based on dragIndex, hoverIndex, and status
    setTasks(newTasks);
  };

  return (
    <Box bg="#3179ba">
      <Box width="90%" m="auto" display="flex" gap="2rem">
        {/* To Do */}
        <Box
          bg="#f1f2f4"
          borderRadius="1rem"
          py="1rem"
          px="1.5rem"
          w="100%"
        >
          <Text fontSize="1.5rem" fontWeight={600}>
            To Do
          </Text>
          {tasks
            .filter((task) => task.status === 'To Do')
            .map((task, index) => (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                index={index}
                moveTask={moveTask}
                status={task.status}
              />
            ))}
        </Box>

        {/* In Progress */}
        <Box
          bg="#f1f2f4"
          borderRadius="1rem"
          py="1rem"
          px="1.5rem"
          w="100%"
        >
          <Text fontSize="1.5rem" fontWeight={600}>
            In Progress
          </Text>
          {tasks
            .filter((task) => task.status === 'In Progress')
            .map((task, index) => (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                index={index}
                moveTask={moveTask}
                status="In Progress"
              />
            ))}
        </Box>

        {/* Review */}
        <Box
          bg="#f1f2f4"
          borderRadius="1rem"
          py="1rem"
          px="1.5rem"
          w="100%"
        >
          <Text fontSize="1.5rem" fontWeight={600}>
            Review
          </Text>
          {tasks
            .filter((task) => task.status === 'Review')
            .map((task, index) => (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                index={index}
                moveTask={moveTask}
                status={task.status}
              />
            ))}
        </Box>

        {/* Done */}
        <Box
          bg="#f1f2f4"
          borderRadius="1rem"
          py="1rem"
          px="1.5rem"
          w="100%"
        >
          <Text fontSize="1.5rem" fontWeight={600}>
            Done
          </Text>
          {tasks
            .filter((task) => task.status === 'Done')
            .map((task, index) => (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                index={index}
                moveTask={moveTask}
                status={task.status}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
