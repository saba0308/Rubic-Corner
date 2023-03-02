import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import './about.css'
const About = () => {
  return (
    <div className='homeContainer'>
      <Typography fontSize={42} textAlign='center' fontWeight={400} variant="h2" color='#1976d2;'>About Us</Typography>
      <img className="about" src="/images/Pair.png" alt="about" />
      <Container>
        <Typography variant="body2" >
          Rubic Corner is a software solutions company, experienced and proven in developing, deploying and supporting enterprise software solutions. We offer best of breed homebred and third party solutions, backed by impeccable product knowledge and support skills to maximize returns from your investment. Rubic Corner is a software consulting and technology services company specialized in industry-specific solutions, strategic outsourcing and integration services. Clients gain competitive advantage by leveraging our product development, delivery capabilities to achieve their product milestones with world-class quality and reduced costs.
        </Typography>
        <br />
        <Typography variant="body2">
          Rubic Corner team of skilled professional provides the technical expertise in varied technologies used in the industry across domains. We work with simplified architecture, based on standard components, services and clients and develop applications from medium to highly complex, to meet demand, across multiple systems and ensure optimization.
        </Typography>
        <br />
        <Typography variant="body2">
          As a regular software development process, we take full advantage of capabilities, features and tools used for building complex business applications. And as part of implementing the technological solutions, Standard architecture and framework is used which meets growing demand for performance and scalability.
        </Typography>
      </Container>
    </div>
  );
};

export default About;