import axios from 'axios'

const baseURL = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
    .get(baseURL)
    .then(({data}) => {
        console.log("Data --->",data)
        setToDo(data);
    })
}

const addToDo = (text,setValue,setToDo) => {
    console.log(text)
    axios
    .post(`${baseURL}/save`,{text})
    .then((data) => {
        console.log(data)
        setValue("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoID,text,setValue, setToDo,setIsUpdating) => {
    axios
    .post(`${baseURL}/update`,{_id:toDoID,text})
    .then((data) => {
        setValue("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id,setToDo) => {
    console.log(_id)
    axios
    .post(`${baseURL}/delete`,{_id})
    .then((data) => {
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}