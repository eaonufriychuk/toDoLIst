import React, { Component } from 'react';
import { v4 } from 'uuid';

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

export default class FilterPriority extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { priority, onPriorityChange, onPriorityClear, priority_filter } = this.props;

    return (
      <div>
        <Button
          className={priority_filter.length > 1 ?
            "sort-filter btn-outline-primary" : "sort-filter btn-outline-primary disabled"}
          onClick={priority_filter.length > 1 ? this.toggle : null}
          style={{ marginBottom: '1rem' }}>Priority</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="all" key={v4()}>Choose priority
                  <CustomInput
                      type="checkbox"
                      id="all"
                      label="All"
                      checked={priority.length === 0}
                      onChange={onPriorityClear}
                    />
                  </Label>
                  {priority_filter.map(prior =>
                    (<div key={v4()}>
                      <Label for="prior">
                        <CustomInput
                          type="checkbox"
                          id={prior}
                          label={prior}
                          checked={priority.includes(prior)}
                          onChange={onPriorityChange(prior)}
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