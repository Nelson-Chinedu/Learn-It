import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Card } from 'src/components';

import Team from 'src/assets/images/team.jpg';

import { Offers } from 'src/constant/whatWeOffer';

import { useStyles } from 'src/modules/Landing/pages/Home/Offer/styled.offer';

const Offer: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="space-evenly"
        spacing={4}
      >
        <Grid item md={5} className="why-we-different-text">
          <Typography variant="h2">
            This is why we are best from others
          </Typography>
          <Typography variant="body2">
            Our mentorship program stands out from the others as we offer a
            personlized approach to learning, unmatched dedication and support
            from our mentors, and a proven track record of success in helping
            mentess having their goals.
          </Typography>
          <img src={Team} alt="Why we different from others as a team" />
        </Grid>
        <Grid item md={5}>
          <Grid container spacing={6}>
            {Offers.map(
              (offer: { title: string; text: string; icon: string }) => (
                <Grid item xs={12} sm={12} md={6}>
                  <Card
                    key={offer.title}
                    width="100%"
                    height="285px"
                    borderRadius="10px"
                  >
                    <Box sx={{ padding: '1em' }}>
                      <img
                        src={offer.icon}
                        alt="icon"
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'contain',
                        }}
                      />
                      <Typography variant="h2" sx={{ margin: '.8em 0px' }}>
                        {offer.title}
                      </Typography>
                      <Typography variant="body2">{offer.text}</Typography>
                    </Box>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Offer;
