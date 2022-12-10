import React, { ReactNode } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';

import useModal from 'src/hooks/useModal';

const useStyles = makeStyles({
  root: {
    '& .MuiTab-root': {
      textTransform: 'capitalize',
    },
    '& .MuiIconButton-root': {
      padding: '15px !important',
    },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabNav = ({
  nav,
  handleChange,
  value,
  children,
}: {
  nav: Readonly<string[]>;
  children?: ReactNode;
  handleChange?: (e: React.SyntheticEvent, value: number) => void;
  value?: string | number;
}) => {
  const classes = useStyles();

  const [state, setState] = useModal();

  const handleAddCategory = () => {
    setState({ ...state, modalName: 'AddCategory' });
  };

  return (
    <Box sx={{ width: '100%' }} className={classes.root}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {nav.map((link: string, index: number) => (
            <Tab label={link} {...a11yProps(index)} key={link} />
          ))}
          <IconButton size="small" onClick={handleAddCategory}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Tabs>
      </Box>
      {children}
    </Box>
  );
};

export { TabNav };
