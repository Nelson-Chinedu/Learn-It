import { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Player, BigPlayButton } from 'video-react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import { useStyles } from 'src/modules/Student/pages/Course/styled.course';

import { Layout } from 'src/Layout';

import { Card, TabNav } from 'src/components';

import { MODULES, STEPS } from 'src/constant/module';

const LINKS = ['Overview', 'FAQ', 'Discussion', 'Reviews', 'Resources'];

const CoursePreview: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { title } = useParams();
  const [isToggled, setIsToggled] = useState<number>();

  const handleToggle = (id: number) => {
    setIsToggled(id);
  };
  return (
    <Layout>
      <Box component="section">
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Card width="100%" borderRadius="10px" height="100vh">
              <Box style={{ padding: '20px' }}>
                <Player src="https://res.cloudinary.com/dbx3dhfkt/video/upload/v1670759001/LearnIT/video-1616afcf-61fb-4c08-b57b-46d1eb715ff5.mp4">
                  <BigPlayButton position="center" />
                </Player>
                <Box style={{ margin: '1em 0px' }}>
                  <Typography variant="subtitle1">
                    {title?.split('-').join(' ')}
                  </Typography>
                  <Typography variant="subtitle2">
                    William Joe | Course Title
                  </Typography>
                </Box>
                <Grid
                  container
                  alignItems="baseline"
                  justifyContent="flex-start"
                  className={classes.btnMentor}
                >
                  <Grid item md={12}>
                    <TabNav nav={LINKS} />
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              width="100%"
              borderRadius="10px"
              height="100vh"
              overflow="scroll"
            >
              <Box style={{ padding: '20px' }}>
                <Box style={{ margin: '0px 0px 1em' }}>
                  <Typography variant="subtitle1">Course Content</Typography>
                  <Typography variant="subtitle2">
                    Lecture (15) Total (5.5 hrs)
                  </Typography>
                </Box>
                {MODULES.map((module: string, index: number) => (
                  <Box style={{ margin: '1.5em 0px' }} key={module}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <Typography variant="subtitle1">{module}</Typography>
                        <Typography variant="subtitle2">
                          Introduction
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item>
                            <Typography variant="subtitle2">
                              21 Lecture 54 Min
                            </Typography>
                          </Grid>
                          <Grid item>
                            <IconButton
                              size="small"
                              onClick={() => handleToggle(index)}
                            >
                              <ArrowDropDownCircleIcon
                                fontSize="small"
                                color="primary"
                              />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Collapse in={isToggled === index ? true : false}>
                      <Grid container>
                        <Grid item className={classes.stepper}>
                          <Stepper activeStep={1} orientation="vertical">
                            {STEPS.map(
                              (step: {
                                label: string;
                                description: string;
                              }) => (
                                <Step key={step.label}>
                                  <StepLabel>
                                    <Typography variant="subtitle1">
                                      {step.label}
                                    </Typography>
                                  </StepLabel>
                                  <StepContent>
                                    <Typography variant="subtitle2">
                                      {step.description}
                                    </Typography>
                                  </StepContent>
                                </Step>
                              )
                            )}
                          </Stepper>
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default CoursePreview;
