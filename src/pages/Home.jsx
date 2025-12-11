import { Row, Col, Card } from "antd";
import { CommitMessageGenerator } from '../components/CommitMessageGenerator';
import { CodeReviewer } from '../components/CodeReviewer';
import { RegexBuilder } from '../components/RegexBuilder';
import { JavaErrorExplainer } from '../components/JavaErrorExplainer';

function Home() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Card title="Commit Message Generator">
          <CommitMessageGenerator />
        </Card>
      </Col>

      <Col span={12}>
        <Card title="Code Reviewer">
          <CodeReviewer />
        </Card>
      </Col>

      <Col span={12}>
        <Card title="Regex Builder">
          <RegexBuilder />
        </Card>
      </Col>

      <Col span={12}>
        <Card title="Java Error Explainer">
          <JavaErrorExplainer />
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
