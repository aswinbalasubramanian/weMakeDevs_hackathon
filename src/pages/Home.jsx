import { Row, Col, Card } from "antd";
import CommitMessageGenerator from '../components/CommitMessageGenerator';
import CodeReviewer from '../components/CodeReviewer';
import RegexBuilder from '../components/RegexBuilder';
import JavaErrorExplainer from '../components/JavaErrorExplainer';

function Home() {
  const cardStyle = { 
    height: "100%", 
    display: "flex", 
    flexDirection: "column",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
  };
  
  const cardBodyStyle = { 
    flex: 1, 
    overflow: "auto",
    padding: "16px"
  };

  return (
    <div style={{ padding: "24px", background: "#f5f5f5", minHeight: "100%", width: "100%" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card title="Commit Message Generator" style={cardStyle} bodyStyle={cardBodyStyle}>
            <CommitMessageGenerator />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <Card title="Code Reviewer" style={cardStyle} bodyStyle={cardBodyStyle}>
            <CodeReviewer />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <Card title="Regex Builder" style={cardStyle} bodyStyle={cardBodyStyle}>
            <RegexBuilder />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <Card title="Java Error Explainer" style={cardStyle} bodyStyle={cardBodyStyle}>
            <JavaErrorExplainer />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
