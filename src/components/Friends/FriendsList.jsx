import { FreindsListItem } from '../Friends/FreindsListItem';
import { Box } from '../Box/Box';

export const FriendsList = ({ friends }) => {
  return (
    <Box as="ul" display="flex" flexDirection="column" m="0" p="0">
      {friends.map(friend => {
        return (
          <FreindsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </Box>
  );
};
