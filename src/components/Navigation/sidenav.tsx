import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import { sidenavMenu } from 'src/constant/sidenav';

const useStyles = makeStyles({
  root: {
    '& a': {
      color: '#848487',
      textDecoration: 'none',
      '&:hover': {
        color: '#4EC491',
        '& .MuiTypography-subtitle2': {
          backgroundColor: '#EBF9F2',
          borderLeft: '4px solid #4EC491',
        },
      },
      '& .MuiTypography-subtitle2': {
        margin: '1em 0px',
        padding: '.5em 1em',
        borderLeft: '4px solid white',
      },
    },
  },
  logo: {
    textAlign: 'center',
    fontWeight: 500,
  },
});

const Sidenav: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      style={{
        background: 'white',
        height: '100vh',
        borderRadius: '25px',
        padding: '2em 0px',
        boxShadow:
          '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 12%), 0px 1px 4px 0px rgb(0 0 0 / 5%)',
      }}
    >
      <Typography variant="subtitle2" className={classes.logo}>
        LearnIt
      </Typography>
      <Box style={{ margin: '2em 0px 3em' }}>
        {sidenavMenu.map((sidenav) => (
          <Link to="#" key={sidenav}>
            <Typography variant="subtitle2">{sidenav}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export { Sidenav };
