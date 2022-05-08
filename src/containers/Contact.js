import React, { Component } from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import PropTypes from "prop-types";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const ContactpageLayout = () => (
  <ResponsiveContainer>
    <Image src='https://static.wixstatic.com/media/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg/v1/fill/w_1225,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg' size='big' rounded centered />
    <Segment style={{ padding: "2em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h1" style={{ fontSize: "2.5em" }}>
              Contact Us
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            <Icon name='map marker alternate' /> We are located at 25 West State Pleasant Grove, Utah 84062
            </p>
            <p style={{ fontSize: "1.33em" }}>
            <Icon name='phone' /> Phone: 801-785-2244
            </p>
            <p style={{ fontSize: "1.33em" }}>
            <Icon name='phone square' /> Text: 801-658-9867
            </p>
            <p style={{ fontSize: "1.33em" }}>
            <Icon name='fax' /> Fax: 801-785-1277
            </p>
            <p style={{ fontSize: "1.33em" }}>
            <Icon name='mail' /> Email: powerhouseutah@yahoo.com
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={8} verticalAlign='middle' >  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.2621409226786!2d-111.74341558460573!3d40.35871147937188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d8414510ecb53%3A0x711f84b4da5c4d2d!2sPowerhouse%20Motorsports!5e0!3m2!1sen!2sus!4v1651866697305!5m2!1sen!2sus" title="GoogleMap" width="100%" height="400" style={{ border: '0' }}></iframe>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center" color='red'>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }} >
              <Header as="h3" style={{ fontSize: "2.2em" }}>
                Motorcycles
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Kymco, SWM, Rieju, and More
              </p>
              <Button size="big" href="/products" inverted >Shop Motorcycles</Button>
            </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2.2em" }}>
              Electric Bikes
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Himiway and Aventon
            </p>
            <Button size="big" href="/products" inverted >Shop eBikes</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default ContactpageLayout;