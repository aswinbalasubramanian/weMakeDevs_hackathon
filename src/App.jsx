import { Layout } from "antd";
import Home from "./pages/Home";
import React from "react";

const {Header,Content} = Layout;

function App() {
  
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <div style={{ color: "#fff", fontSize: 20 }}>
          Dev Productivity Hub
        </div>
      </Header>

      <Content style={{ padding: "0", flex: 1 }}>
        <Home />
      </Content>
    </Layout>
  )
}

export default App
