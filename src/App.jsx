import { Layout } from "antd";
import Home from "./pages/Home";

const { Header, Content, Footer } = Layout;

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
      <Footer style={{ textAlign: "center", fontSize: 12, color: "#888" }}>
        Built with ❤️ by <strong>Aswin & Harish</strong> for weMakeDevs Hackathon 2025
      </Footer>
    </Layout>
  );
}

export default App;
