import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Text } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box bg={"#3179ba"}  >

      <Box width={'90%'} m={"auto"} display={"flex"} gap={"2rem"}>
        {/* Box 1  TO DO*/}
        <Box borderRadius={"1rem"} bg={"#f1f2f4"} py={"1rem"} px={"1.5rem"} w={"100%"}>
          <Text fontSize={"1.5rem"} fontWeight={600}>To Do</Text>
          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project A</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project B</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project C</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project D</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project E</Text>
          </Box>
        </Box>

        {/* Box 2 IN PROGRESS*/}
        <Box borderRadius={"1rem"} bg={"#f1f2f4"} py={"1rem"} px={"1.5rem"} w={"100%"}>
          <Text fontSize={"1.5rem"} fontWeight={600}>IN PROGRESS</Text>
          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project F</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project G</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project H</Text>
          </Box>

        </Box>


        {/* Box 3 REVIEW*/}
        <Box borderRadius={"1rem"} bg={"#f1f2f4"} py={"1rem"} px={"1.5rem"} w={"100%"}>
          <Text fontSize={"1.5rem"} fontWeight={600}>REVIEW</Text>
          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"0.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project I</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project J</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project K</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project L</Text>
          </Box>

        </Box>

        {/* Box 4 DONE*/}
        <Box borderRadius={"1rem"} bg={"#f1f2f4"} py={"1rem"} px={"1.5rem"} w={"100%"}>
          <Text fontSize={"1.5rem"} fontWeight={600}>DONE</Text>
          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project M</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project N</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project O</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project P</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project Q</Text>
          </Box>

          <Box my={"0.5rem"} borderRadius={"1rem"} bg={"#FFF"} p={"1.5rem"}>
            <Text fontSize={"1rem"} fontWeight={600}>Project R</Text>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default App
