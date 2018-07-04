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
    this.state = {
      collapse: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.filterValues.length < 2) {
      this.setState({ collapse: false })
    }
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
    console.log(this.state.collapse)
  }

  render() {
    const { filterAddedValues, onFilterChange, onFilterClear, filterValues, filterLabel } = this.props;

    return (
      <div>
        <Button
          className={filterValues.length > 1 ?
            "sort-filter btn-outline-primary" : "sort-filter btn-outline-primary disabled"}
          onClick={filterValues.length > 1 ? this.toggle : null}
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
                      checked={filterAddedValues.length === 0}
                      onChange={onFilterClear}
                    />
                  </Label>
                  {filterValues.map(value =>
                    (<div key={v4()}>
                      <Label for={value}>
                        <CustomInput
                          type="checkbox"
                          id={value}
                          label={value}
                          checked={filterAddedValues.includes(value)}
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