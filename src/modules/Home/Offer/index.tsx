import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { Card } from 'src/components';

import { useStyles } from 'src/modules/Home/Offer/styled.offer';

import ExpertMentor from 'src/assets/images/online_learning.svg';
import Certificate from 'src/assets/images/certificate.svg';
import Support from 'src/assets/images/connecting_teams.svg';
import Offer1 from 'src/assets/images/offer-1.svg';
import Offer2 from 'src/assets/images/offer-2.svg';
import Offer3 from 'src/assets/images/offer-3.svg';
import ArrowUp from 'src/assets/images/arrowUp.svg';
import ArrowDown from 'src/assets/images/arrowDown.svg';

const Offer: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h2">
          What you will get from our platform
        </Typography>
      </Box>
      <Box className={classes.cardContainer}>
        <Box className={classes.arrowDown}>
          <img src={ArrowDown} />
        </Box>
        <Box className={classes.expertWrapper}>
          <img src={Offer1} alt="offer step" />
          <Card width="250px" borderRadius="10px">
            <CardContent className={classes.cardContent}>
              <Typography variant="subtitle1">Expert Mentor</Typography>
              <img src={ExpertMentor} alt="Expert mentor illustration" />
              <Typography variant="subtitle2">
                You will get world class top mentor
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.certificationWrapper}>
          <img src={Offer2} alt="offer step" />
          <Card width="250px" borderRadius="10px">
            <CardContent className={classes.cardContentMid}>
              <Typography variant="subtitle1">Certifications</Typography>
              <img src={Certificate} alt="Expert mentor illustration" />
              <Typography variant="subtitle2">
                After course completion, you will get a valuable certificate
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.arrowUp}>
          <img src={ArrowUp} />
        </Box>
        <Box className={classes.supportWrapper}>
          <img src={Offer3} alt="offer step" />
          <Card width="250px" borderRadius="10px">
            <CardContent className={classes.cardContent}>
              <Typography variant="subtitle1">Lifetime support</Typography>
              <img
                src={Support}
                alt="Expert mentor illustration"
                style={{ width: '150px', margin: '1em 0px' }}
              />
              <Typography variant="subtitle2">
                You will get 24/7 full time support
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Offer;
