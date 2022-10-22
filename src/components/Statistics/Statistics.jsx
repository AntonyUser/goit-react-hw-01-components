import { Box } from '../Box/Box';
import { GeneralData } from './GeneraData';
// import NewData from '../../data.json';

export const Statistics = ({ title, data }) => {
  return (
    <Box
      bg="lightgrey"
      display="flex"
      alignItems="center"
      p="12px"
      justifyContent="center"
      mt="20px"
    >
      <Box
        bg="white"
        width="600px"
        height="auto"
        className="statistics"
        borderRadius="normal"
      >
        <Box
          as="h2"
          display="flex"
          justifyContent="center"
          className="title"
          color="grey"
        >
          {title}
        </Box>
        <GeneralData stats={data}></GeneralData>
      </Box>
    </Box>
  );
};
