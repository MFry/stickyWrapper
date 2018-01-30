import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';

const Content = () => (
  <Row>
    <Col md="12">
      {' '}
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        Example of <code>muicss</code>:
      </p>
    </Col>
    <Col md="6">
      <p>
        Columns are similar to bootstrap. More info can be found{' '}
        <a href="https://www.muicss.com/docs/v1/react/grid">here</a>.
      </p>
    </Col>
    <Col md="6">
      <p> The colums are 12 based </p>
      <Button color="primary">Button</Button>
    </Col>
  </Row>
);

export default Content;
