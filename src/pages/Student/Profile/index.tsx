import { FunctionComponent, Fragment } from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import { Layout } from 'src/Layout/student';

import { Card, TabNav } from 'src/components';

import { Details } from 'src/pages/Student/Profile/Details';
import { useStyles } from 'src/pages/Student/Profile/styled.profile';

import { PROFILE_LINKS, SUPPORT_LINKS } from 'src/constant/profile';

import AvatarUser from 'src/assets/images/Avatar.png';

const Profile: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Box component="section" className={classes.root}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item md={4}>
            <Card width="100%" borderRadius="10px" height="100vh">
              <Box className="topLeft">
                <Avatar
                  src={AvatarUser}
                  alt="profile picture"
                  sx={{ width: 60, height: 60 }}
                />
                <Typography variant="subtitle2">John Doe</Typography>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  className="status"
                >
                  <Grid item md={6}>
                    <Badge color="primary" badgeContent={20} />
                    <Typography variant="subtitle2">
                      Course in progress
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Badge color="secondary" badgeContent={30} />
                    <Typography variant="subtitle2">
                      Course completed
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box className="support">
                <Typography variant="subtitle1">Support</Typography>
                <Box>
                  {SUPPORT_LINKS.map((link) => (
                    <Fragment key={link}>
                      <Link href="#" underline="hover">
                        <Typography variant="subtitle2">{link}</Typography>
                      </Link>
                    </Fragment>
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item md={8}>
            <Card width="100%" borderRadius="10px" height="100vh">
              <Box style={{ padding: '20px' }} className="containerRight">
                <Typography>Profile Setting</Typography>
                <TabNav nav={PROFILE_LINKS} />
                <Details />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Profile;
