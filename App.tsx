import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Tabs, Table, Typography, Space, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CaretDownOutlined } from "@ant-design/icons";


const { TabPane } = Tabs;
interface User {
  id: string;
  tags: any;
  produce: string;
  issues: string;
  quantity: string;
  sids: any;
  buyer: any;
  hasIssue: boolean;
  /*
  tinfo: any;
  addcost: string;
  */
}

const columns: ColumnsType<User> = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "tags"
  },
  {
    title: "Type",
    dataIndex: "produce"
  },
  {
    title: "Contact",
    dataIndex: "buyer",
    render: (buyer) => (
      <>
        {buyer.map((buy: any) => {
          return (
            <p key={buy}>
              {buy}
            </p>
          );
        })}
      </>
    )
  },
  
  {
    title: "Address",
    dataIndex: "quantity"
  },

  {
    title: "More Information",
    dataIndex: "sids",
    render: (sids: string) => (
      <>
      <div className="info">
      <a style={{ color: "blue" }} key={sids}>
        {sids[0]}
      </a>
      </div>
      |
      <div className="info">
      <a style={{ color: "blue" }} key={sids}>
        {sids[1]}
      </a>
      </div>
      |
      <div className='info'>
      <a style={{ color: "blue" }} key={sids}>
        {sids[0]}
      </a>
      </div>
      |
      <div className='info'>
      <a style={{ color: "blue" }} key={sids}>
        {sids[0]}
      </a>
      </div>
    
      </>

    )
  },
  {
    title: "Issues",
    dataIndex: "issues",
    render: (i) => (
      <>
      <div className="info">
      <a style={{ color: "blue" }} key={i}>
        {i}
      </a>
      </div>
      </>)
  }
  /*
  {
    title: "Transaction Info",
    dataIndex: "tinfo",
    render: (tinfo) => (
      <>
        {tinfo.map((ad: any) => {
          return (
            <p key={ad}>
              {ad}
            </p>
          );
        })}
      </>
    )
  },
  {
    title: "Additional Cost",
    dataIndex: "addcost",

  }
  */
];

const data: User[] = [
  {
    id: "T12345",
    tags: "Ramesh Gowda",
    produce: "Independent",
    issues: "",
    quantity: "Address line",
    sids: ["Produce List","Matches","Transactions","ID Card"],
    buyer: ["67890", "Mandya"],
    hasIssue:true,
    /*
    tinfo: ["-"],
    addcost: "-"
    */
  },
  {
    id: "T12345",
    tags: "Ramesh Gowda",
    produce: "FPO",
    issues: "View",
    quantity: "Address line",
    sids:  ["Produce List","Matches","Transactions","ID Card"],
    buyer: ["67890", "Mandya"],
    hasIssue:true
    /*
    tinfo: ["-"],
    addcost: "-"
    */
  },
  {
    id: "T12345",
    tags: "Ramesh Gowda",
    produce: "Mill",
    issues: "View",
    quantity: "Address line",
    sids:  ["Produce List","Matches","Transactions","ID Card"],
    buyer: ["67890", "Mandya"],
    hasIssue:true
    /*
    tinfo: ["-"],
    addcost: "Transportation",
    */

  },
  {
    id: "T12345",
    tags: "Ramesh Gowda",
    produce: "Produce-Verity-Grade",
    issues: "View",
    quantity: "Address line",
    sids:  ["Produce List","Matches","Transactions","ID Card"],
    buyer: ["67890", "Mandya"],
    hasIssue:true
    /*
    tinfo: ["Transportation", "Details"],
    addcost: "-",
    */
  },
];
function App() {
  return (
    <>
      <Typography.Title level={4} className="title">Users</Typography.Title>
      <Space> </Space>
      <Tabs type="card" className="cardd" >
        <TabPane  className="seller" tab="Seller" key="1">
          <Table<User> columns={columns} dataSource={data} pagination={false} scroll={{ x: 1350 }} rowClassName={(record, index) => (record.issues!=""? "rowClassName1" : "rowClassName2")} />
          <div className="transactions">
            <a href="/" > View All Transactions</a>
          </div>
        </TabPane>
        <TabPane  className="seller" tab="Buyer" key="2">
        <Table<User> columns={columns} dataSource={data} pagination={false} scroll={{ x: 1350 }} rowClassName={(record, index) => (record.tags[0] == "Pending" ? "rowClassName1" : "rowClassName2")} />
          <div className="transactions">
            <a href="/" > View All Transactions</a>
          </div>
        </TabPane>
      </Tabs>
    </>

  );
}



export default App;