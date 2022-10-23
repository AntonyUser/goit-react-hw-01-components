import { Box } from '../Box/Box';
import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';

export const TransactionList = ({ items }) => {
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
          {items.map((trans, index) => {
            return (
              <TransactionItem
                index={index}
                id={trans.id}
                type={trans.type}
                amount={trans.amount}
                currency={trans.currency}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

TransactionList.propTypes = {
  transactionList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
