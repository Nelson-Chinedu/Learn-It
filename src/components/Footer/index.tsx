import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import { SOCIAL_ICONS, QUICK_LINKS, RESOURCES } from 'src/constant/footer';

import { Wrapper } from 'src/components/Footer/styled.footer';

const Footer: FunctionComponent<Record<string, never>> = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper isMobile={isMobile}>
      <Grid container alignItems="flex" justifyContent="space-between">
        <Grid size={{ xs: 12, sm: 12, md: 3.5 }} className="footer">
          <Typography variant="h6">LearnIT</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, sed esse modi iste sapiente a laborum impedit enim
            officia necessitatibus.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2 }} className="footer">
          <Typography variant="h6">Quick Links</Typography>
          {QUICK_LINKS.map(({ label, path }) => (
            <Link to={path} key={label}>
              <Typography variant="subtitle2">{label}</Typography>
            </Link>
          ))}
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2 }} className="footer">
          <Typography variant="h6">Resources</Typography>
          {RESOURCES.map((resource) => (
            <Typography variant="subtitle2" key={resource}>
              {resource}
            </Typography>
          ))}
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2 }} className="footer">
          <Typography variant="h6">Socials</Typography>
          <Stack direction="row" spacing={2}>
            {SOCIAL_ICONS.map((icon, index) => (
              <img
                src={icon}
                key={index}
                style={{ width: '35px', height: '35px' }}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ margin: '1em 0px' }} />
      <Typography variant="subtitle2">
        &copy; copyright {currentYear} - All rights reserved
      </Typography>
    </Wrapper>
  );
};

export { Footer };
