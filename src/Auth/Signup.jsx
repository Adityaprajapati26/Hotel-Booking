import React from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
  } from "@chakra-ui/react";
  import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);

const Sign = () => {
    const navigate=useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
     console.log(email,password)
    const handleclick=()=>{
        let obj={
            email:email,
            password:password
        }
        localStorage.setItem("User",JSON.stringify(obj))
        navigate("/Login")
       
    }


  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
        <h1>Signin</h1>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Sign</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleclick}
                
               
              >
                Signup
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="#" >
          Sign Up
        </Link>
      </Box>
    </Flex>

    


   
    

   
  )
}

export default Sign