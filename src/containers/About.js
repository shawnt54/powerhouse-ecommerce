import React, { Component } from "react";
import {
  Button,
  Grid,
  Header,
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

const AboutpageLayout = () => (
  <ResponsiveContainer>
    <Image src='https://static.wixstatic.com/media/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg/v1/fill/w_1225,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg' size='big' rounded centered />
    <Segment style={{ padding: "2em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h1" style={{ fontSize: "2.5em" }}>
              About Us
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Powerhouse is family owned and operated. The Sweeten family brought the first snowmobiles to Utah nearly 60 years ago and Powerhouse is run by members of the second and third generation of that legacy. Owner Dustin Sweeten has been heavily involved in the Utah powersports landscape for over 30 years as a dealer, racer, State OHV Board Member and in many other volunteer capacities as well. This isn't just a business for us, it's part of who we are!
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={8} verticalAlign='middle' >
            <Image src='https://static.wixstatic.com/media/fb9e24_863c76cd3d3e43c084baef1679f8ee67~mv2.jpg/v1/fill/w_1160,h_836,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fb9e24_863c76cd3d3e43c084baef1679f8ee67~mv2.jpg' fluid rounded centered />
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

export default AboutpageLayout;