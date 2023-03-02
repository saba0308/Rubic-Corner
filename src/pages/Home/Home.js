// import pic from '../images/background.png';
import './Home.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = () => {

  return (

    <div className='homeContainer'>
      <div className='flexContainer'>
        <div className='content'>
          <Box sx={{ fontStyle: 'normal', m: 1, typography: 'title', fontSize: 26 ,paddingLeft:'10%'}}>Start growing with Us today</Box>
          <Typography sx={{ textOverflow: 'ellipsis',paddingLeft:'10%' }} variant="body2" color="text.secondary">
            Our team’s technical excellence takes you halfway to success.
            we understand that a solid hold of your business domain and mature development approach is equally important.We put a high value on transparency and extensive communication to make sure the needs and expectations of every client are met 100%.
          </Typography>
          <br />
          <Box sx={{paddingLeft:"10%"}} >
          <Button  href='#ourServices' variant='contained' size="small"  > <ArrowDownwardIcon />Our services </Button>
          </Box>
        </div>

        <div className='backgroundImage'>
          <img src="/images/Launch.png" alt="background" />
        </div>
      </div>

      <Stack sx={{ paddingTop: '10%' }} direction="column" spacing={5}>
        <Stack sx={{ paddingLeft: '20%' }} direction="row">
          <Box sx={{ fontStyle: 'normal', m: 1, fontSize: 22 }} >ENGAGE US AS YOUR DIGITAL TRANSFORMATION PARTNER FOR GROWTH</Box>
        </Stack>

        <Stack sx={{ paddingLeft: '10%' }}direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
 id="ourServices" >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="/images/mask_group_1.webp"
                alt="Collaboration & Success"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Collaboration & Success
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We use expertise, teamwork, and creativity to enable your success.
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="/images/mask_group_2.webp"
                alt=" Quality Assurance"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quality Assurance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We ensure quality coding and development with our comprehensive QA process.
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="/images/mask_group_3.webp"
                alt="Competitive Pricing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Competitive Pricing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our process-driven hybrid model allows you to get complex solutions for less.
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
        </Stack>



      </Stack>
    </div>


  );
};

export default Home;