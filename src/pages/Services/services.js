import { Stack } from "@mui/system";
import Container from '@mui/material/Container';
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Services = () => {
    return (
        <Container sx={{ paddingTop: 15 }} >
             <Typography fontSize={42} textAlign='center' fontWeight={400} variant="h2" color='#1976d2;'>Contact Us</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}  >

                <Stack direction={"column"} spacing={2} >
                    <Card sx={{ minWidth: 250 }}>
                        <CardContent>

                            <Typography variant="h5" component="div">
                                Web Application
                            </Typography>

                            <Typography sx={{ textOverflow: 'ellipsis' }} variant="p">
                                <br />
                                With our custom web application development services, you can automate complex business challenges and solve complex problems. Our Web app developers ensure a smooth sail for each part of the work.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 250 }}>
                        <CardContent>

                            <Typography variant="h5" component="div">
                                Android App Development
                            </Typography>

                            <Typography sx={{ textOverflow: 'ellipsis' }} variant="p">
                                <br />
                                Our team is proud of our track record and the quality of our Android app development projects. Our focus is on creating apps that are easy to use and highly data-driven, creating an easy and enjoyable user experience.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Stack>

                <Stack direction={"column"}>
                    <img src="/images/Meeting.png" alt="Meeting" width={600} />
                </Stack>
                <Stack direction={"column"} spacing={2}>
                    <Card sx={{ minWidth: 250 }}>
                        <CardContent>

                            <Typography variant="h5" component="div">
                                iOS App Development
                            </Typography>

                            <Typography sx={{ textOverflow: 'ellipsis' }} variant="p">
                                <br />
                                Our custom IOS app developers will work with you to build an app that best suits your desired feature set, target market, and business goals.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 250 }}>
                        <CardContent>

                            <Typography variant="h5" component="div">
                                Hybrid Mobile App Development
                            </Typography>

                            <Typography sx={{ textOverflow: 'ellipsis' }} variant="p">
                                <br />
                                We can create applications that give your product the look and feel of native ones on all major mobile platforms. Our teams have the experience to produce apps for iOS and Android with a painstakingly granular methodology that ensures each platform has an equal chance to shine.

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Stack>
            </Stack>

        </Container>



    );
};

export default Services;