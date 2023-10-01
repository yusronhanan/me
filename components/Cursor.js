import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useEnsName, useEnsAvatar, useAccount } from 'wagmi';
import { useMouse, useWindowSize } from 'react-use';
import { trimAddress } from '../utils/address';

const Cursor = () => {
  const [hasMounted, setMounted] = useState(false);
  const { width } = useWindowSize();
  const { address } = useAccount();
  const { data: ensName } = useEnsName({
    address,
  });
  const { data: ensAvatar } = useEnsAvatar({
    addressOrName: address,
  });
  const [isVisible, setVisibility] = useState(false);
  const boxRef = useRef();
  const { elX, elY } = useMouse(boxRef);
  const isMobile = width <= 768;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      if (elX || elY) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    }
  }, [elX, elY, boxRef]);

  if (isMobile || !address || !hasMounted) return false;

  return (
    <Box
      ref={boxRef}
      position="fixed"
      zIndex={9999}
      pointerEvents="none"
      top={0}
      left={0}
      width="full"
      height="full"
      color="white"
      fontSize="sm"
      textTransform="uppercase"
    >
      <Flex
        // as={motion.div}
        position="absolute"
        alignItems="center"
        bg="white"
        color="black"
        borderRadius="xl"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        fontWeight="semibold"
        px={3}
        py={1}
        pl={ensAvatar ? 1 : 3}
        transform={`translate(${elX + 5}px, ${elY + 20}px)`}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        {ensAvatar && (
          <Image
            width="16px"
            height="16px"
            borderRadius="full"
            src={ensAvatar}
            alt={address}
            mr={2}
          />
        )}
        {ensName || trimAddress(address)}
      </Flex>
    </Box>
  );
};

export default Cursor;
