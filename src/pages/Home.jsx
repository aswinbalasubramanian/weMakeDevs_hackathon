import { Row } from "antd";

function Home() {
  return (
    <Row>
        <Col>
            <Card>
                <CommitMessageGenerator />
            </Card>
        </Col>
   
    
        <Col>
            <Card>
                <CodeReviewer />
            </Card>
        </Col>

        <Col>
            <Card>
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