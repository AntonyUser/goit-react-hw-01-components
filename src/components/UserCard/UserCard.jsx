import { Box } from '../Box/Box';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      bg="grey"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="12px"
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
        borderRadius="normal"
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
            mt="12px"
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
          className="stats"
          bg="lightgrey"
          // justifyContent="space-around"
          m="0"
          p="0"
          borderTop="1px solid"
        >
          <Box
            as="li"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            pt="12px"
            pb="12px"
            border="normal"
            width="33.3333%"
          >
            <Box as="span" color="grey" className="label">
              Followers
            </Box>
            <Box className="quantity" fontWeight="700">
              {followers}
            </Box>
          </Box>
          <Box
            as="li"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            pt="12px"
            pb="12px"
            border="normal"
            width="33.3333%"
            borderLeft="1px solid"
          >
            <Box as="span" color="grey" className="label">
              Views
            </Box>
            <Box as="span" className="quantity" fontWeight="700">
              {views}
            </Box>
          </Box>
          <Box
            as="li"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            pt="12px"
            pb="12px"
            borderLeft="1px solid"
            width="33.3333%"
          >
            <Box as="span" color="grey" className="label">
              Likes
            </Box>
            <Box className="quantity" fontWeight="700">
              {likes}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
