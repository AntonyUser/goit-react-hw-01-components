import { Box } from '../Box/Box';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Box display="flex" justifyContent="center" p="24px">
      <Box
        as="table"
        className="transaction-history"
        width="800px"
        border="1px solid"
        boxShadow="3px 5px lightgrey"
      >
        <Box as="thead" color="white" bg="turquoise">
          <Box as="tr">
            <Box as="th" width="33.3333%" p="24px" border="1px solid">
              TYPE
            </Box>
            <Box as="th" width="33.3333%" p="24px" border="1px solid">
              AMOUNT
            </Box>
            <Box as="th" width="33.3333%" p="24px" border="1px solid">
              CURRENCY
            </Box>
          </Box>
        </Box>

        <Box as="tbody">
          {items.map(({ id, type, amount, currency }, index) => {
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
          })}
        </Box>
      </Box>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactionList: PropTypes.exact(
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    )
  ),
};
