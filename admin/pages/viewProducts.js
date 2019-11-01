import { Table, Divider, Tag } from "antd";
import MyLayout from "../components/MyLayout";
import firebase_config from "./../firebase_config";

import { Link } from "next/link";

const db = firebase_config.firestore();
const { Column, ColumnGroup } = Table;

//
class ViewProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProducts: []
    };
  }

  deleteProduct(product) {
    console.log(product.id);

    db.collection("products")
      .doc(product.id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    const columns = [
      {
        title: "Image",
        dataIndex: "image"
        // render: (text, record) => (
        //   <Link href={'/admin/products/[id]'} as={'/admin/products/' + record.id}>
        //     <a>
        //       <img src={text} alt={text} style={{ maxWidth: 200 }} />
        //     </a>
        //   </Link>
        // )
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        // render: (text, record) => (
        //   <Link to="/product/[id]" as={"/product/" + record.id}>
        //     <a href="/product/[id]" as={"/product/" + record.id}>
        //       {record.name}
        //     </a>
        //   </Link>
        // )
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status"
      },

      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity"
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
         
          <a onClick={() => this.deleteProduct(record)}>Delete</a>
        )
      }
    ];

    db.collection("products")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());

        this.setState({
          dataProducts: data
        });
      });

    return (
      <MyLayout>
        <Table
          columns={columns}
          dataSource={this.state.dataProducts}
          key="table_products"
        />
      </MyLayout>
    );
  }
}

export default ViewProducts;
