import React, { Component } from "react";
import {
  Button,
  Container,
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

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Image src='https://static.wixstatic.com/media/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg/v1/fill/w_1225,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg' size='big' rounded centered />
    <Segment style={{ padding: "2em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Powerhouse Motorsports is Your #1 Locally Owned Powersports Dealer
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Looking for fun ways to get outdoors with your family? We have several options you're sure to love. Check out our inventory and come visit us!
            </p>
            <Button size="huge" href="/products" color="green" >Find Vehicles For Your Outdoor Fun</Button>
          </Grid.Column>
          <Grid.Column floated="right" width={8} verticalAlign='middle' >
            <Image src='https://static.wixstatic.com/media/fb9e24_6aa43980afdf4d7a9a30d58d53732a41~mv2.jpg/v1/fill/w_1899,h_1070,al_tr,q_90,usm_0.66_1.00_0.01,enc_auto/fb9e24_6aa43980afdf4d7a9a30d58d53732a41~mv2.jpg' fluid rounded centered />
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
    <Segment style={{ padding: "4em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          UTV's and Snowmobiles
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          In addition to motorcycles and eBikes, we also offer side by sides (UTV's) and Snowmobiles. Snowmobiles are great for the wintertime here in Utah and UTV's offer year-round fun for the entire family!
        </p>
        <Button as="a" href="/products" size="large" color="green">
          Shop Now
        </Button>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
