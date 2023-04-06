import { Button, ButtonGroup, Card, CardBody, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'

export const ToDoCard = ({todo_text,updateMode,deleteToDo}) => {
  return (
    <Card 
    width={{base:'350px',sm:'450',md:'650px'}}
    as={motion.div}
    initial={{opacity:0}}
    animate={{opacity:1,transition:{duration:0.2}}}
    >
        <CardBody bgColor={'gray.800'} borderRadius={4}>
            <HStack justifyContent={'space-between'}>
                <Text color={'white'}>{todo_text}</Text>
                <ButtonGroup variant='ghost' colorScheme='whiteAlpha' spacing="2">
                <Button w={'75px'} color={'white'} leftIcon={<AiFillEdit/>} onClick={updateMode}></Button>
                <Button w={'75px'} color={'white'} rightIcon={<AiFillDelete/>} onClick={deleteToDo}></Button>
                </ButtonGroup>
            </HStack>
        </CardBody>
    </Card>
  )
}
