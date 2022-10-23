import { FreindsListItem } from '../Friends/FreindsListItem';
import { Box } from '../Box/Box';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      m="0"
      p="12px"
      alignItems="center"
    >
      {friends.map(friend => {
        return (
          <FreindsListItem
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </Box>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
