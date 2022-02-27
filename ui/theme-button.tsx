import { Tooltip, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

function ThemeButton({ size }: { size: number }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      borderRadius="lg"
      bg={useColorModeValue('gray.800', 'whiteAlpha.800')}
      label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}>
      <IconButton
        aria-label="Theme button"
        w={size - 12}
        h={size - 12}
        border="2px"
        borderRadius="100%"
        borderColor={useColorModeValue('gray.400', 'whiteAlpha.400')}
        fontSize={size}
        _hover={{ borderColor: 'secondary' }}
        onClick={toggleColorMode}
        rounded="full"
        color={useColorModeValue('black', 'white')}
        _focus={{ boxShadow: 'none' }}
        icon={useColorModeValue(<FaMoon />, <BsSunFill />)}
        variant="ghost"
      />
    </Tooltip>
  );
}

export default ThemeButton;
