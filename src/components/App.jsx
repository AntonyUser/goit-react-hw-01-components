import user from '../user.json';
import { UserCard } from '../components/UserCard/UserCard';
import NewData from '../data.json';
import { Statistics } from './Statistics/Statistics';
import friendsTotal from '../friends.json';
import { FriendsList } from '../components/Friends/FriendsList';
import { TransactionList } from './TransactionList/TransactionList';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" data={NewData} />

      <FriendsList friends={friendsTotal} />
      <TransactionList items={transactions} />
    </>
  );
};
