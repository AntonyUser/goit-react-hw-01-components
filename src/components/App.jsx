import user from '../user.json';
import { UserCard } from '../components/UserCard/UserCard';
import NewData from '../data.json';
import { Statistics } from './Statistics/Statistics';
import friendsTotal from '../friends.json';
import { FriendsList } from '../components/Friends/FriendsList';

export const App = () => {
  return (
    <div>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" data={NewData} />

      <FriendsList friends={friendsTotal} />
    </div>
  );
};
