import user from '../Data/user.json';
import { Profile } from '../components/UserCard/UserCard';
import data from '../Data/data.json';
import { Statistics } from './Statistics/Statistics';
import friendsTotal from '../Data/friends.json';
import { FriendsList } from '../components/Friends/FriendsList';
import { TransactionHistory } from './TransactionList/TransactionHistory';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />

      <FriendsList friends={friendsTotal} />
      <TransactionHistory items={transactions} />
    </>
  );
};
