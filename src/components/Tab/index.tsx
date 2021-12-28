import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiTab-root': {
      textTransform: 'inherit',
    },
  },
});

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// const TabPanel = (props: TabPanelProps) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// };

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabNav = ({ nav }: { nav: Readonly<string[]> }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className={classes.root}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {nav.map((link: string, index: number) => (
            <Tab label={link} {...a11yProps(index)} key={link} />
          ))}
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        <Typography variant="subtitle1"> Overview content here</Typography>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          asperiores harum quisquam quo, velit, ducimus repellendus optio
          corrupti cumque tempora ratione dolorum enim facilis voluptates,
          accusantium magnam. Reprehenderit, eaque est!
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="subtitle1">FAQ content here</Typography>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          asperiores harum quisquam quo, velit, ducimus repellendus optio
          corrupti cumque tempora ratione dolorum enim facilis voluptates,
          accusantium magnam. Reprehenderit, eaque est!
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="subtitle1">Discussion content here</Typography>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          asperiores harum quisquam quo, velit, ducimus repellendus optio
          corrupti cumque tempora ratione dolorum enim facilis voluptates,
          accusantium magnam. Reprehenderit, eaque est!
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="subtitle1">Review content here</Typography>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          asperiores harum quisquam quo, velit, ducimus repellendus optio
          corrupti cumque tempora ratione dolorum enim facilis voluptates,
          accusantium magnam. Reprehenderit, eaque est!
        </Typography>
      </TabPanel> */}
    </Box>
  );
};

export { TabNav };
