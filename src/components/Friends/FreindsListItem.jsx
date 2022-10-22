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
    >
      <Box
        as="span"
        display="flex"
        width="5px"
        height="5px"
        bg="red"
        className="status"
        isOnline={isOnline}
        borderRadius="50%"
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
