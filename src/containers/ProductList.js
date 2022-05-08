import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  Button,
  Container,
  Dimmer,
  Icon,
  Image,
  Item,
  // Label,
  Loader,
  Message,
  Segment
} from "semantic-ui-react";
import { productListURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";

class ProductList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(productListURL)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  }

  handleAddToCart = slug => {
    this.setState({ loading: true });
    authAxios
      .post(addToCartURL, { slug })
      .then(res => {
        this.props.refreshCart();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    const { data, error, loading } = this.state;
    return (
      <Container>
        <Image src='https://static.wixstatic.com/media/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg/v1/fill/w_1225,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fb9e24_cab97852dee54d9f9ae8fb0d7338ebe5~mv2.jpg' size='big' rounded centered />
        {error && (
          <Message
            error
            header="There were some errors with your submission"
            content={JSON.stringify(error)}
          />
        )}
        {loading && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        )}
        <Item.Group divided>
          {data.map(item => {
            return (
              <Item key={item.id}>
                <Item.Image src={item.image} />
                <Item.Content>
                  <Item.Header
                    as="a"
                    onClick={() =>
                      this.props.history.push(`/products/${item.id}`)
                    }
                  >
                    {item.title}
                  </Item.Header>
                  <Item.Meta>
                    <span className="cinema">{item.category}</span>
                  </Item.Meta>
                  <Item.Description>{item.description}</Item.Description>
                  <Item.Extra>
                    {<Button
                      color="green"
                      floated="right"
                      icon
                      labelPosition="right"
                      onClick={() => this.handleAddToCart(item.slug)}
                    >
                      Add to cart
                      <Icon name="cart plus" />
                    </Button>}
                    {/* {item.discount_price && (
                      // <Label
                      //   color={
                      //     item.label === "primary"
                      //       ? "blue"
                      //       : item.label === "secondary"
                      //       ? "green"
                      //       : "olive"
                      //   }
                      // >
                      //   {item.label}
                      // </Label>
                    )} */}
                  </Item.Extra>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
