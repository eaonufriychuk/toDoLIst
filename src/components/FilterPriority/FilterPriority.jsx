import React, { Component } from 'react';

import {
  Collapse,
  Button,
  CardBody,
  Card,
  CustomInput,
  Form,
  FormGroup,
  Label
} from 'reactstrap';

import { PRIORITY_LABEL } from "../../constants";

export default class FilterPriority extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { priority, onPriorityChange, onPriorityClear } = this.props;

    return (
      <div>
        <Button className="sort-filter btn-outline-primary btn-sm" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Priority</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="all" key="all">Choose priority
                  <CustomInput
                      type="checkbox"
                      id="all"
                      label="All"
                      checked={priority.length === 0}
                      onChange={onPriorityClear}
                    />
                  </Label>
                  {Object.keys(PRIORITY_LABEL).sort((a, b) => a - b).map(prior =>
                    (<div>
                      <Label for="prior" key={prior}>
                        <CustomInput
                          type="checkbox"
                          id={prior}
                          label={PRIORITY_LABEL[prior]}
                          checked={priority.includes(PRIORITY_LABEL[prior])}
                          onChange={onPriorityChange(PRIORITY_LABEL[prior])}
                        />
                      </Label>
                    </div>
                    ))}
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}