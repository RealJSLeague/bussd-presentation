// Import React
import React from 'react';

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, Image } from 'spectacle';

import styled from 'styled-components';

import { Grid, Row, Col } from 'react-flexbox-grid';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const images = {
  express: require('../assets/express-logo.png'),
  mongo: require('../assets/mongodb-logo.png'),
  node: require('../assets/nodejs-logo.png'),
  mongoose: require('../assets/mongoose-logo.png'),
  redis: require('../assets/redis-logo.png'),
  erd: require('../assets/bussd-erd.svg'),
  react: require('../assets/react-logo.png'),
  styledComponents: require('../assets/styled-components-logo.png'),
  googleMaps: require('../assets/google-maps-logo.png'),
  ogun: require('../assets/ogun-scooter.gif')
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
    quarterWidth: '25%'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const Person = styled.div`
  > img {
    width: 100%;
    border-radius: 50%;
    background-color: red;
  }
`;

const StyledListItem = styled(ListItem)`
  font-size: 1em !important;
  color: black;
  margin-bottom: 25px;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    max-width: 100%;
  }
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <em>Bussd</em>
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            I got <em>BUSSD</em> at Origin Code Academy
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps style={{ marginBottom: '75px' }}>
            JSLeague
          </Heading>

          <Grid>
            <Row>
              <Col xs={3}>
                <Person>
                  <img src="https://s3-us-west-1.amazonaws.com/dh-portfolio-1/IMG-9721_1_25.jpg" />
                  <h3>David</h3>
                </Person>
              </Col>
              <Col xs={3}>
                <Person>
                  <img src="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/misc/gbk-chicken.jpg" />
                  <h3>Gareth</h3>
                </Person>
              </Col>
              <Col xs={3}>
                <Person>
                  <img src="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/misc/gbk-chicken.jpg" />
                  <h3>Keegan</h3>
                </Person>
              </Col>
              <Col xs={3}>
                <Person>
                  <img src="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/misc/gbk-chicken.jpg" />
                  <h3>Sujitha</h3>
                </Person>
              </Col>
            </Row>
          </Grid>

          <h1 style={{ transform: 'rotate(180deg)' }}>
            <em>BUSSD</em>
          </h1>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Why <em>BUSSD</em> ?
          </Heading>
          <List>
            <StyledListItem>
              A better way to get <em>BUSSD</em> in San Diego
            </StyledListItem>
            <StyledListItem>
              Current methods of getting <em>BUSSD</em> in San Diego are <strong>insufficient</strong> and{' '}
              <strong>weak</strong>
            </StyledListItem>
            <StyledListItem>
              No existing way to get <em>BUSSD</em> in real-time on the go, from your <strong>pocket computer</strong>
            </StyledListItem>
            <StyledListItem>
              A few existing apps that let you get <em>BUSSD</em> : <strong>MTS, Transit</strong>
            </StyledListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            <em>BUSSD</em> From the Back End
          </Heading>

          <Grid>
            <Row>
              <StyledCol xs={4}>
                <Image src={images.mongo} />
              </StyledCol>
              <StyledCol xs={4}>
                <Image src={images.node} />
              </StyledCol>
              <StyledCol xs={4}>
                <Image src={images.express} />
              </StyledCol>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <StyledCol xs={4}>
                <Image src={images.redis} />
              </StyledCol>
              <StyledCol xs={4}>
                <Image src={images.mongoose} />
              </StyledCol>
            </Row>
          </Grid>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            <em>BUSSD</em> From the Back End
          </Heading>
          <Image src={images.erd} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            I Had A Front End Collision With <em>BUSSD</em>
          </Heading>

          <Grid>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <StyledCol xs={4}>
                <Image src={images.react} />
              </StyledCol>
              <StyledCol xs={4}>
                <Image src={images.googleMaps} />
              </StyledCol>
              <StyledCol xs={4}>
                <Image src={images.styledComponents} style={{ padding: '50px' }} />
              </StyledCol>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <Text>Plus: axios, react-google-maps, moment, react-flexbox-grid, react-geolocated</Text>
              <h1 style={{ transform: 'rotateZ(180deg)' }}>
                <em>BUSSD</em>
              </h1>
            </Row>
          </Grid>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              Now You Too Are Gonna Get <em>BUSSD</em>
            </Quote>
            <Cite>Demo</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <h2>
            Get <em>BUSSD</em> For Our Homeboy
          </h2>
          <Image src={images.ogun} />
          <h2>Ogun TIGLI</h2>
          <h3>Instructor, 2018 - 2018</h3>
        </Slide>
      </Deck>
    );
  }
}
