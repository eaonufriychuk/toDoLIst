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
    const { category, onCategoryChange, onCategoryClear, category_filter } = this.props;

    return (
      <div>
        <Button
          className={category_filter.length > 1 ?
            "sort-filter btn-outline-primary" : "sort-filter btn-outline-primary disabled"}
          style={{ marginBottom: '1rem' }}
          onClick={category_filter.length > 1 ? this.toggle : null} >Category</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="all" key="all">Choose category
                  <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="All"
                      checked={category.length === 0}
                      onChange={onCategoryClear}
                    />
                  </Label>
                  {category_filter.map(type =>
                    (<Label for="type" key={v4()}>
                      <div>
                        <CustomInput
                          type="checkbox"
                          id={type} label={type}
                          checked={category.includes(type)}
                          onChange={onCategoryChange(type)}
                        />
                      </div>
                    </Label>))}
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}