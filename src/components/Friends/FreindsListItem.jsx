import { Box } from '../Box/Box';

export const FreindsListItem = ({ avatar, name, id, isOnline }) => {
  return (
    <Box
      as="li"
      key={id}
      className="item"
      display="flex"
      width="200px"
      p="12px"
      alignItems="center"
      border="1px solid"
      boxShadow="2px 3px #888888"
      mt="12px"
      mb="12px"
    >
      <Box
        as="span"
        display="flex"
        width="15px"
        height="15px"
        className="status"
        isOnline={isOnline}
        borderRadius="50%"
        bg={isOnline ? 'green' : 'red'}
      ></Box>
      <Box
        as="img"
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
        mr="12px"
        ml="12px"
      />
      <Box as="p" className="name">
        {name}
      </Box>
    </Box>
  );
};
