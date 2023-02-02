import { FunctionComponent, SyntheticEvent, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import sanitizeHtml from 'sanitize-html';
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
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useStyles } from 'src/modules/Student/pages/Course/styled.course';

import { TabNav } from 'src/components';

import { MODULES, STEPS } from 'src/constant/module';

import { useGetEnrollCourseDetailQuery } from 'src/modules/Student/services/studentSlice';

import { RootState } from 'src/store';

const LINKS = ['Overview', 'FAQ'];

const CoursePreview: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { title, id } = useParams();
  const { userId } = useSelector((state: RootState) => state.account);
  const [value, setValue] = useState(0);
  const { data, isLoading } = useGetEnrollCourseDetailQuery(
    { userId, courseId: id },
    { skip: !id }
  );
  const [isToggled, setIsToggled] = useState<number>();

  const handleToggle = (id: number) => {
    setIsToggled(id);
  };

  return (
    <Box component="section">
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : !isLoading && !data ? (
        <Typography>Something went wrong</Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Box sx={{ padding: '0px 20px' }}>
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                <Link to="/s/courses">Courses</Link>,
                <Typography
                  key="3"
                  color="text.primary"
                  sx={{ textTransform: 'capitalize' }}
                >
                  {title?.split('-').join(' ')}
                </Typography>
              </Breadcrumbs>
            </Box>
            <Box style={{ padding: '20px' }}>
              <ReactPlayer url={data.payload.preview} controls />
              <Box style={{ margin: '1em 0px' }}>
                <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                  {title?.split('-').join(' ')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ textTransform: 'capitalize' }}
                >
                  {`${data.payload.firstname} ${data.payload.lastname}`}
                </Typography>
              </Box>
              <Grid container alignItems="baseline" justifyContent="flex-start">
                <Grid item md={12}>
                  <TabNav
                    nav={LINKS}
                    value={value}
                    handleChange={(_e: SyntheticEvent, newValue: number) =>
                      setValue(newValue)
                    }
                  >
                    <Box sx={{ margin: '2em 0px' }}>
                      {value === 0 && (
                        <Box
                          component="div"
                          className={classes.contentWrapper}
                          dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(
                              JSON.parse(data?.payload?.objectives ?? null)
                            )?.replace(/["]+/g, ''),
                          }}
                        />
                      )}
                      {value === 1 && (
                        <Box
                          component="div"
                          className={classes.contentWrapper}
                          dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(
                              JSON.parse(data?.payload?.faq ?? null)
                            )?.replace(/["]+/g, ''),
                          }}
                        />
                      )}
                    </Box>
                  </TabNav>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={4} sx={{ paddingTop: '0px !important' }}>
            <Box
              style={{
                padding: '35px 20px',
                borderLeft: '1px solid #e3e0e0',
                height: '100vh',
                position: 'fixed',
                width: '24%',
              }}
            >
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
                      <Typography variant="subtitle2">Introduction</Typography>
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
                            (step: { label: string; description: string }) => (
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
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CoursePreview;
