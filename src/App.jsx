import { Layout } from "antd";
import Home from "./pages/Home";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Header>
        <div style={{ color: "#fff", fontSize: 20 }}>
          Dev Productivity Hub
        </div>
      </Header>

      <Content style={{ padding: 24 }}>
        <Home />
      </Content>
    </Layout>
  );
}

export default App;
