import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  InputNumber,
  Button,
  Checkbox,
  Upload,
  Modal
} from "antd";


import MyLayout from "../components/MyLayout";
import firebase_config from "./../firebase_config";

const db = firebase_config.firestore();
// const storage = firebase_config.storage();

// upload file

// ...............

class CreatProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      nameProduct: "",
      statusProduct: "",
      priceProduct: "",
      quantityProduct: 1,

      previewVisible: false,
      previewImage: "",

      visible: false,

      listItem: []
    };
  }

  //   UpLoad Image

  //   .........................
  // Get value products

  getValueProducts(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //
  creatNewProduct() {
    
     db.collection("products")
      .add({
        name: this.state.nameProduct,
        status: this.state.statusProduct,
        price: this.state.priceProduct,
        quantity: this.state.quantityProduct
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        db.collection("products")
          .doc(docRef.id)
          .set({
            name: this.state.nameProduct,
            status: this.state.statusProduct,
            price: this.state.priceProduct,
            quantity: this.state.quantityProduct,
            key:docRef.id,
            id: docRef.id
          });
      })
      // .then(
      //   this.setState({
      //     nameProduct:"",
      //     statusProduct:"",
      //     priceProduct:"",
      //     quantityProduct:"",
      //   })
      // )
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  handleOk() {
    // Router.push('/viewProducts');
  }

  handleCancelModal = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <MyLayout>
          <Form>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item>
                  <span>Name Product</span>
                  <Input
                    placeholder="Name Product"
                    value={this.state.nameProduct}
                    onChange={this.getValueProducts.bind(this)}
                    name="nameProduct"
                  />
                </Form.Item>
                <Form.Item>
                  <span>Status Product</span>
                  <Input
                    placeholder="Status Product"
                    value={this.state.statusProduct}
                    onChange={this.getValueProducts.bind(this)}
                    name="statusProduct"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item>
                  <span>Price Product</span>
                  <Input
                    placeholder="Price Product"
                    value={this.state.priceProduct}
                    onChange={this.getValueProducts.bind(this)}
                    name="priceProduct"
                  />
                </Form.Item>
                <Form.Item>
                  <span>Quantity Product</span>
                  <br />
                  <Input
                    placeholder="Quantity"
                    value={this.state.quantityProduct}
                    onChange={this.getValueProducts.bind(this)}
                    name="quantityProduct"
                  />
                </Form.Item>
              </Col>
            </Row>

            <br />

            <br />
            <Button type="primary" onClick={this.creatNewProduct.bind(this)}>
              Thêm Mới
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancelModal}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Form>
        </MyLayout>
      </div>
    );
  }
}

export default CreatProduct;
