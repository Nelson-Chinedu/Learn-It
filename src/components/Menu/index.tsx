import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MuiMenu, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material';

type MenuProps = {
  name: string;
  path?: string;
  action?: () => void;
};

type IProps = {
  anchorEl: any;
  open: boolean;
  handleClose?: () => void;
  menus: MenuProps[];
};

const Wrapper = styled(MuiMenu)({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: '.1em',
    width: '15%',
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
      '& a': {
        color: 'inherit !important',
        textDecoration: 'none',
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
});

const Menu: FunctionComponent<IProps> = ({
  anchorEl,
  open,
  handleClose,
  menus,
}) => {
  return (
    <Wrapper
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
      {menus.map(({ name, path, action }) =>
        path ? (
          <Link key={name} to={path} onClick={handleClose}>
            <ListItem className={name}>
              <Typography variant="subtitle2" onClick={action}>
                {name}
              </Typography>
            </ListItem>
          </Link>
        ) : (
          <ListItem className={name} onClick={action}>
            <Typography variant="subtitle2">{name}</Typography>
          </ListItem>
        ),
      )}
    </Wrapper>
  );
};

export { Menu };
