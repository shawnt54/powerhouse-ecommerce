import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";

class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    const { authenticated, cart, loading } = this.props;
    return (
      <div>
        <Menu inverted>
          <Container>
            <Link to="/">
              <Menu.Item header>Home</Menu.Item>
            </Link>
            <Link to="/products">
              <Menu.Item header>Inventory</Menu.Item>
            </Link>
            <Link to="/service-parts">
              <Menu.Item header>Service and Parts</Menu.Item>
            </Link>
            <Link to="/about">
              <Menu.Item header>About Us</Menu.Item>
            </Link>
            <Link to="/contact">
              <Menu.Item header>Contact Us</Menu.Item>
            </Link>
            {authenticated ? (
              <React.Fragment>
                <Menu.Menu position="right">
                  <Link to="/profile">
                    <Menu.Item>Profile</Menu.Item>
                  </Link>
                  <Dropdown
                    icon="cart"
                    loading={loading}
                    text={`${cart !== null ? cart.order_items.length : 0}`}
                    pointing
                    className="link item"
                  >
                    <Dropdown.Menu>
                      {cart !== null ? (
                        <React.Fragment>
                          {cart.order_items.map(order_item => {
                            return (
                              <Dropdown.Item key={order_item.id}>
                                {order_item.quantity} x {order_item.item.title}
                              </Dropdown.Item>
                            );
                          })}
                          {cart.order_items.length < 1 ? (
                            <Dropdown.Item>No items in your cart</Dropdown.Item>
                          ) : null}
                          <Dropdown.Divider />

                          <Dropdown.Item
                            icon="arrow right"
                            text="Checkout"
                            onClick={() =>
                              this.props.history.push("/order-summary")
                            }
                          />
                        </React.Fragment>
                      ) : (
                        <Dropdown.Item>No items in your cart</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item header onClick={() => this.props.logout()}>
                    Logout
                  </Menu.Item>
                </Menu.Menu>
              </React.Fragment>
            ) : (
              <Menu.Menu position="right">
                <Link to="/login">
                  <Menu.Item header>Login</Menu.Item>
                </Link>
                <Link to="/signup">
                  <Menu.Item header>Create Account</Menu.Item>
                </Link>
              </Menu.Menu>
            )}
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Motorcycles" />
                <List link inverted>
                  <List.Item as="a" href="/products">Kymco</List.Item>
                  <List.Item as="a" href="/products">SWM</List.Item>
                  <List.Item as="a" href="/products">Rieju</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="UTV's" />
                <List link inverted>
                  <List.Item as="a" href="/products">Kymco</List.Item>
                  <List.Item as="a" href="/products">Arctic Cat</List.Item>
                  <List.Item as="a" href="/products">Polaris</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Snowmobiles" />
                <List link inverted>
                  <List.Item as="a" href="/products">Arctic Cat</List.Item>
                  <List.Item as="a" href="/products">Polaris</List.Item>
                  <List.Item as="a" href="/products">Yamaha</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h3" content="Powerhouse Motorsports" />
                <p>
                  Call us at 801-785-2244 or text us at 801-658-9867
                </p>
                <p>
                  25 West State Rd Pleasant Grove, UT 84062 
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <List inverted link size="large">
            <List.Item>
              <p>
                <Icon link inverted name='facebook f'></Icon>
                <Icon link inverted name='instagram'></Icon>
                <Icon link inverted name='youtube'></Icon>
                <Icon link inverted name='twitter'></Icon>
              </p>
              </List.Item>
              <List.Item>
                <p><Icon name='copyright outline'></Icon>2022 Powerhouse Motorsports</p>
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
