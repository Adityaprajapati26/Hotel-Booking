import React, { useState } from 'react'
 import style from "./room.module.css"
import {
    FormControl,
    FormLabel,
    
    FormHelperText,
    Input,
    Box,
    Center,
    RadioGroup,
    Radio,
    HStack,
    Select,
    Button
  } from '@chakra-ui/react'
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex
  } from '@chakra-ui/react'
import { useEffect } from 'react'
import Editmodal from './Editmodal'

const Room = () => {
   
     const [category,setCategory]=useState("")
     const  [url,setUrl]=useState("")
     const [room,setRoom]=useState("")
     const [bed,setBed]=useState("")
      const [cost,setCost]=useState("")
      const [adult,setAdult]=useState("")
      const [capacity,setCapacity]=useState("")
      const [Data,setData]=useState([])
      const handlesubmit=()=>{
        const obj={
         category: category,
        image_url: url,
        type_of_room: room,
        bed_type: bed,
		no_of_persons:adult,
		capacity:capacity,
		cost:cost,
		booked:false
        }
        fetch(`https://userdatajson.herokuapp.com/Room`,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)

        })
        .then((res)=>res.json())
        .then((res)=>{window.alert("succesfully added")})
        .then(()=>RooomData())
        
      }
      
    const RooomData=()=>{
        fetch(`https://userdatajson.herokuapp.com/Room`)
        .then((res)=>res.json())
        .then((res)=>setData(res))

      }
      useEffect(()=>{
        fetch(`https://userdatajson.herokuapp.com/Room`)
        .then((res)=>res.json())
        .then((res)=>setData(res))

      },[])
      console.log(Data)
     
// delete
const handleDelete=(id)=>{
    console.log(id)
    fetch(`https://userdatajson.herokuapp.com/Room/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .then((res)=>console.log("delete"))
    .then(()=>RooomData())
}



  return (
    <>
    <Flex>
    <Box maxW='lg' borderWidth='1px' width="50%" borderRadius='lg' overflow='hidden'>
     <FormControl width="90%" marginLeft="15px" >
     <FormLabel as='legend'> Select Category</FormLabel>
            <RadioGroup   >
                <HStack spacing='24px'>
                <Radio onChange={(e)=>setCategory(e.target.value)} value='Family'>Family</Radio>
                <Radio onChange={(e)=>setCategory(e.target.value)}value='Deluxe'>Deluxe</Radio>
                <Radio onChange={(e)=>setCategory(e.target.value)} value='Suite'>Suite</Radio>  
              </HStack>
            </RadioGroup>

            <FormLabel>Image</FormLabel>
             <Input  value={url} onChange={(e)=>setUrl(e.target.value)}type='text' />
           <FormHelperText>Paste any Image of Room</FormHelperText>

           <FormLabel>Select type of room</FormLabel>
            <Select placeholder='Select Type' value={room} onChange={(e)=>setRoom(e.target.value)} >
             <option value='AC'>AC</option>
             <option value="Non Ac">Non AC</option>
            </Select>      
           
           <FormLabel>Bed</FormLabel>
           <Select placeholder='Select Bed'value={bed} onChange={(e)=>setBed(e.target.value)}>
             <option value='Single'>Single</option>
             <option value="Double">Double</option>
            </Select> 
            <FormLabel>Adults</FormLabel>
             <Input type='number' value={adult} onChange={(e)=>setAdult(e.target.value)} />
           
           <FormLabel>Capacity</FormLabel>
             <Input type='text' value={capacity} onChange={(e)=>setCapacity(e.target.value)} />
         
           <FormLabel>Cost</FormLabel>
             <Input type='number' value={cost} onChange={(e)=>setCost(e.target.value)}/>
        
             <Button
            mt={4}
            colorScheme='teal'
           onClick={handlesubmit}
            type='submit'
          >
            Submit
          </Button>

       </FormControl>

    </Box>
   
    
 {/* Table   - Id
- Category
- Type of room
- Bed type
- No of persons
- Capacity
- Cost
- Status (booked/not booked)
- Edit
- Delete */}

    <Box >
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
          <Thead>
       
            <Th>id</Th>
            <Th>Room type</Th>
            <Th>category</Th>
            <Th>Bed type</Th>
            <Th>Person</Th>
            <Th>Capacity</Th>
            <Th>Cost</Th>
            <Th>status</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Thead>
          <Tbody >
          {Data.map((el)=>{
        return(
            
            <Tr key={el.id}>
                <Td>
                    {el.id}
                </Td>
                <Td>{el.category}</Td>
                <Td>{el.type_of_room}</Td>
                <Td>{el.bed_type}</Td>
                <Td>{el.no_of_persons}</Td>
                <Td>{el.capacity}</Td>
                <Td>{el.cost}</Td>
                <Td>{el.booked}</Td>
                  <Td><Editmodal/></Td>
                <Td  key={el.id}><Button bgColor={"red.400"} onClick={()=>handleDelete(el.id)}>Delete</Button>  </Td>
                </Tr>
                
            
        )
     })}
          </Tbody>
          
       </Table>
       </TableContainer>
    
    
    </Box>
  
    </Flex>
</>

  )
}

export default Room