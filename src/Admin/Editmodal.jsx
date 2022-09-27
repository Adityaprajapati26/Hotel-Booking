import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
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
    Button,
    useDisclosure
  } from '@chakra-ui/react'

   function Editmodal() {
    const { isOpen, onClose,onOpen } = useDisclosure()
    return (
      <>
           <Button onClick={onOpen}>Edit</Button>
   
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

            <FormControl width="90%" marginLeft="15px" >
     <FormLabel as='legend'> Select Category</FormLabel>
            <RadioGroup   >
                <HStack spacing='24px'>
                <Radio  value='Family'>Family</Radio>
                <Radio value='Deluxe'>Deluxe</Radio>
                <Radio  value='Suite'>Suite</Radio>  
              </HStack>
            </RadioGroup>

            <FormLabel>Image</FormLabel>
             <Input type='text' />
           <FormHelperText>Paste any Image of Room</FormHelperText>

           <FormLabel>Select type of room</FormLabel>
            <Select placeholder='Select Type'  >
             <option value='AC'>AC</option>
             <option value="Non Ac">Non AC</option>
            </Select>      
           
           <FormLabel>Bed</FormLabel>
           <Select placeholder='Select Bed'>
             <option value='Single'>Single</option>
             <option value="Double">Double</option>
            </Select> 
            <FormLabel>Adults</FormLabel>
             <Input type='number'  />
           
           <FormLabel>Capacity</FormLabel>
             <Input type='text'  />
         
           <FormLabel>Cost</FormLabel>
             <Input type='number' />
        
             <Button
            mt={4}
            colorScheme='teal'
      
            type='submit'
          >
            Submit
          </Button>

       </FormControl>






             
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
           
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Editmodal