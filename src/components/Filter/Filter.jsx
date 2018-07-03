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
    const { filterValues, onFilterChange, onFilterClear, filter, filterLabel } = this.props;

    return (
      <div>
        <Button
          className={filter.length > 1 ?
            "sort-filter btn-outline-primary" : "sort-filter btn-outline-primary disabled"}
          onClick={filter.length > 1 ? this.toggle : null}
          style={{ marginBottom: '1rem' }}>{`Sort by ${filterLabel}`}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for={`all${filterLabel}`} key={v4()}>{`Choose ${filterLabel}`}
                    <CustomInput
                      type="checkbox"
                      id={`all${filterLabel}`}
                      label="All"
                      checked={filterValues.length === 0}
                      onChange={onFilterClear}
                    />
                  </Label>
                  {filter.map(value =>
                    (<div key={v4()}>
                      <Label for="prior">
                        <CustomInput
                          type="checkbox"
                          id={value}
                          label={value}
                          checked={filterValues.includes(value)}
                          onChange={onFilterChange(value)}
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