import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/core';

const useTimer = ({ run }) => {
  const [firstDate, setFirstDate] = useState(0);
  const [secondDate, setSecondDate] = useState(0);
  const clockTimer = useRef();
  useEffect(() => {
    if (run) {
      setFirstDate(Date.now());

      clockTimer.current = setInterval(() => {
        // console.log('okkkk');
        setSecondDate(Date.now());
      }, 33);
    } else {
      if (firstDate && secondDate) {
        setFirstDate(0);
        setSecondDate(0);
      }
      console.log(clockTimer.current);
      if (clockTimer.current && clockTimer.current.clearTimeout) {
        console.log('clear');
        clearInterval(clockTimer.current);
      }
    }
  }, [run]);

  return { timer: Math.abs(secondDate - firstDate) };
};
const Counter = () => {
  const [run, setRun] = useState(false);
  const { timer } = useTimer({ run });
  return (
    <Flex
      align="center"
      justify="center"
      bg="white.100"
      color="black"
      height="100vh"
    >
      <Flex mt={{ base: 4, md: 0 }} justify="center" direction="column">
        <Text textAlign="center">{timer}</Text>
        <Box w="400px" mt={{ base: 4 }}>
          <Button
            bg="transparent"
            border="1px"
            margin="0 auto"
            width="100%"
            onClick={() => setRun(r => !r)}
          >
            START
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Counter;
