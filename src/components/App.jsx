import Profile from './Profile';
import StatisticsList from './StatisticList';
import user from '../user.json';
import data from '../data.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      /> */}
      <StatisticsList title="Upload stats" stats={data} />;
      <StatisticsList stats={data} />;
    </div>
  );
};
