import { Box } from '../Box/Box';

export const UserCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      bg="grey"
      display="flex"
      alignItems="center"
      p="12px"
      justifyContent="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        className="profile"
        bg="white"
        width="300px"
        height="auto"
        p="10px"
      >
        <Box
          className="description"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            as="img"
            borderRadius="round"
            src={avatar}
            alt={username}
            className="avatar"
            width="50%"
          />
          <Box as="h2" className="name">
            {username}
          </Box>
          <Box as="p" color="grey" m="4px" className="tag">
            @{tag}
          </Box>
          <Box as="p" color="grey" m="4px" className="location">
            {location}
          </Box>
        </Box>
        <Box
          as="ul"
          width="100%"
          display="flex"
          p="4px"
          className="stats"
          bg="lightgrey"
          justifyContent="space-around"
        >
          <Box
            as="li"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p="10px"
          >
            <Box as="span" color="grey" className="label">
              Followers
            </Box>
            <Box className="quantity">{stats.followers}</Box>
          </Box>
          <Box
            as="li"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p="10px"
          >
            <Box as="span" color="grey" className="label">
              Views
            </Box>
            <Box as="span" className="quantity">
              {stats.views}
            </Box>
          </Box>
          <Box
            as="li"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p="10px"
          >
            <Box as="span" color="grey" className="label">
              Likes
            </Box>
            <Box className="quantity">{stats.likes}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
