import { UserCard } from './UserCard';
import user from '../../user.json';

export const User = () => {
  return (
    <UserCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
