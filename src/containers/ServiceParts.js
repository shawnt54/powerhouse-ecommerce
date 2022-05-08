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

const ServicepageLayout = () => (
  <ResponsiveContainer>
    <Image src='https://static.wixstatic.com/media/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg/v1/fill/w_1225,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg' size='big' rounded centered />
    <Segment style={{ padding: "2em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
        <Grid.Column floated="right" width={8} verticalAlign='top' >
            <Header as="h3" style={{ fontSize: "2.2em" }}>
              Service
            </Header>
            <p style={{ fontSize: "1.4em" }}>
              We service and repair machines from most major brands of UTV's (side by sides, RZR's, etc.), ATV's, and off-road motorcycles. We do not work on street bikes.
            </p>
            <p style={{ fontSize: "1.2em" }}>
              <b>Watercraft:</b> We work on four-stroke watercraft and are one of the only shops in the state that will also work on two-stroke watercraft. Due to the unavailability of parts, we no longer work on watercraft that are no longer in production (Tigershark, Polaris, Wet Jet, etc.)
            </p>
            <p style={{ fontSize: "1.2em" }}>
              <b>Scooters:</b> KYMCO only.
            </p>
            <p style={{ fontSize: "1.2em" }}>
              <b>Power Equipment:</b> We work on most major brands of lawn mowers and other gas powered lawn and garden tools.
            </p>
            <p style={{ fontSize: "1.3em" }}>
            We will not work on any vehicle produced in China and advise our customers not to purchase them.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={8} >
            <Header as="h3" style={{ fontSize: "2.2em" }}>
              Parts and Accessories
            </Header>
            <p style={{ fontSize: "1.4em" }}>
              Accessories
            </p>
            <p style={{ fontSize: '1.25em' }}>We search our suppliers for greate deals on helmets, clothing, and accessories and pass those deals on to our customers. People often drive from other states to outfit their entire family with helmets and gear.</p>
            <p style={{ fontSize: "1.4em" }}>
              Parts
            </p>
            <p style={{ fontSize: '1.25em' }}>We can order in parts from any of the major manufacturers and most aftermarket companies whether you want to have us fix your machine or if you plan on doing the work yourself.</p>
            <p style={{ fontSize: "1.4em" }}>
              Tires
            </p>
            <p style={{ fontSize: '1.2em' }}>We offer great deals on tires for UTV's, ATV's, and Motorcycles. We install them as well.</p>
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

export default ServicepageLayout;
