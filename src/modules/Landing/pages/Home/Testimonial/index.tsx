import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AliceCarousel from 'react-alice-carousel';
import { Card } from 'src/components';

import { TESTIMONIALS } from 'src/constant/testimonial';

import { useStyles } from 'src/modules/Landing/pages/Home/Testimonial/styled.testimonial';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const Testimonial = () => {
  const classes = useStyles();

  const handleDragStart = (e: { preventDefault: () => any }) =>
    e.preventDefault();

  const items = TESTIMONIALS.map(
    (testimonial: {
      image: string;
      paragraph: string;
      name: string;
      field: string;
    }) => (
      <Card width="320px" borderRadius="10px">
        <Box sx={{ padding: '10px' }}>
          <Typography>{testimonial.paragraph}</Typography>
          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            <img
              src={testimonial.image}
              onDragStart={handleDragStart}
              role="presentation"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50px',
                objectFit: 'contain',
              }}
            />
            <Box>
              <Typography variant="subtitle2">{testimonial.name}</Typography>
              <Typography variant="subtitle1">{testimonial.field}</Typography>
            </Box>
          </Stack>
        </Box>
      </Card>
    )
  );

  return (
    <Box className={classes.root}>
      <Typography variant="h3">
        <q>What our mentee's are saying</q>
      </Typography>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay={true}
          responsive={responsive}
          disableButtonsControls={true}
          infinite={true}
          autoPlayInterval={1000}
        />
      </Container>
    </Box>
  );
};

export default Testimonial;
