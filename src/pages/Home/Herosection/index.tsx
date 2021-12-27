import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';

import { Topnav, Input, Button } from 'src/components';

import HerosectionImage from 'src/assets/images/student.gif';

import { useStyles } from 'src/pages/Home/Herosection/styled.herosection';

const Home: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [isSearchInput, setIsSearchInput] = useState('Design');

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchInput(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSearch = () => {};

  return (
    <Box className={classes.root}>
      <Topnav />
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={5}>
            <Typography variant="h1">
              Learn from home and make yourself skilled
            </Typography>
            <Box className={classes.searchWrapper}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item md={9}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item sm={6} style={{ marginLeft: '1em' }}>
                      <Input
                        size="small"
                        variant="standard"
                        type="search"
                        color="primary"
                        placeholder="Search course..."
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        name="search"
                        fullWidth={true}
                        handleChange={handleSearch}
                      />
                    </Grid>
                    <Grid item sm={5}>
                      <Input
                        select
                        value={isSearchInput}
                        size="small"
                        variant="standard"
                        type="search"
                        color="primary"
                        name="search"
                        InputProps={{ disableUnderline: true }}
                        fullWidth={true}
                        handleChange={handleSelect}
                      >
                        <MenuItem value="Design">Design</MenuItem>
                      </Input>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} style={{ display: 'flex', height: '90px' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    size="large"
                    disableElevation={true}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src={HerosectionImage}
              alt="An illustration of man typing on a laptop"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
