import { Box } from '../Box/Box';
import { getRandomHexColor } from './GetRandomColor';

export const Data = ({ id, label, percentage }) => {
  return (
    <Box
      as="li"
      key={id}
      className="item"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bg={getRandomHexColor()}
      width="25%"
      color="white"
    >
      <Box as="span" className="label" mb="10px">
        {label}
      </Box>
      <Box as="span" className="percentage" fontSize="30px">
        {percentage}%
      </Box>
    </Box>
  );
};
