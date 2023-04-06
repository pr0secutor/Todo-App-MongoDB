import { Button, Center, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import { ToDoCard } from "./components/ToDoCard";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

import './index.css'

function App() {

  const [toDo,setToDo] = useState([]);
  const [value,setValue] = useState("");
  const [isUpdating,setIsUpdating] = useState(false)
  const [toDoID,setToDoID] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id,text) => {
    setIsUpdating(true)
    setValue(text)
    setToDoID(_id)
  }

  return (
    <div className="App">
    <Center w={'99vw'} h={'40vh'} justifyContent={'space-evenly'} display={'flex'} flexDirection={'column'} overscrollY={'auto'}>
        <VStack spacing={4} mb={16}>
          <Heading as='h1' size={{base:'lg',md:'2xl'}}>TO DO APP</Heading>
          <HStack>
            <Input variant={'flushed'} placeholder={'Add Your ToDos....'} size='lg'focusBorderColor={'gray.300'}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button pl={6} pr={6} colorScheme={'gray'} size="md" onClick={isUpdating ? ()=>updateToDo(toDoID,value,setValue,setToDo,setIsUpdating) : ()=>addToDo(value,setValue,setToDo)}>
              {isUpdating ? "UPDATE":"ADD"}
            </Button>
          </HStack>
        </VStack>
    </Center>
    <VStack spacing={4} mb={16}>
          {toDo.map((item) =>
          <ToDoCard
            key={item._id}
            todo_text={item.text}
            updateMode = {() => updateMode(item._id,item.text)}
            deleteToDo = {() => deleteToDo(item._id,setToDo)}
          /> 
          )}
    </VStack>
    </div>
  );
}

export default App;
