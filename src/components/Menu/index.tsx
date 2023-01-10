import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MuiMenu, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

type MenuProps = {
  name: string;
  path?: string;
  action?: () => void;
};

type IProps = {
  anchorEl: Element | ((element: Element) => Element);
  open: boolean;
  handleClose?: () => void;
  menus: MenuProps[];
};

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: '.1em',
      boxShadow: `rgb(255, 255, 255) 0px 0px 0px 0px,
       rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
         rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiList-root': {
        '& .Delete': {
          color: 'red',
        },
      },
      '& .MuiListItem-root': {
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: 100,
        cursor: 'pointer',
        '& a': {
          textDecoration: 'none',
          color: 'inherit !important',
        },
        '&:focus-visible': {
          outline: 'none !important',
        },
      },
    },
  },
});

const Menu: FunctionComponent<IProps> = ({
  anchorEl,
  open,
  handleClose,
  menus,
}) => {
  const classes = useStyles();
  return (
    <MuiMenu
      className={classes.root}
      elevation={0}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {menus.map(({ name, path, action }) => (
        <ListItem key={name} className={name}>
          <Link to={path} onClick={handleClose}>
            <Typography variant="subtitle2" onClick={action}>
              {name}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </MuiMenu>
  );
};

export { Menu };
