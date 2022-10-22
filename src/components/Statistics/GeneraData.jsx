import { Box } from '../Box/Box';
import { Data } from './Data';
import PropTypes from 'prop-types';

export const GeneralData = ({ stats }) => {
  return (
    <Box
      as="ul"
      display="flex"
      justifyContent="space-around"
      className="start-list"
      m="0"
      p="0"
    >
      {stats.map(stat => {
        return (
          <Data key={stat.id} label={stat.label} percentage={stat.percentage} />
        );
      })}
    </Box>
  );
};

GeneralData.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
