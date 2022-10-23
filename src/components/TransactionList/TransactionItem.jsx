import { Box } from '../Box/Box';
import PropTypes from 'prop-types';

export const TransactionItem = ({ id, type, amount, currency, index }) => {
  return (
    <Box
      as="tr"
      key={id}
      color="grey"
      textAlign="center"
      border="1px solid"
      bg={index % 2 === 0 ? 'rgb(242, 242, 224)' : 'white'}
    >
      <Box as="td" border="1px solid" textStyle="primary" p="12px">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Box>
      <Box as="td" border="1px solid" p="12px">
        {amount}
      </Box>
      <Box as="td" border="1px solid" p="12px">
        {currency}
      </Box>
    </Box>
  );
};

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
