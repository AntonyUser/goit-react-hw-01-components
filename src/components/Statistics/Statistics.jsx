import { Box } from '../Box/Box';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './GetRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      bg="lightgrey"
      display="flex"
      alignItems="center"
      p="12px"
      justifyContent="center"
      mt="20px"
    >
      <Box
        bg="white"
        width="600px"
        height="auto"
        className="statistics"
        borderRadius="normal"
      >
        <Box
          as="h2"
          display="flex"
          justifyContent="center"
          className="title"
          color="grey"
        >
          {title.toUpperCase()}
        </Box>

        <Box
          as="ul"
          display="flex"
          justifyContent="space-around"
          className="start-list"
          m="0"
          p="0"
        >
          {stats.map(({ id, label, percentage }) => {
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
          })}
        </Box>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.exact(
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    )
  ),
};
