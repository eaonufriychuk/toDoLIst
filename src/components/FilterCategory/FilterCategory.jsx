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

import { CATEGORY_LABEL } from '../../constants';

export default class FilterPriority extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { category, onCategoryChange, onCategoryClear } = this.props;

    return (
      <div>
        <Button className="sort-filter btn btn-outline-primary btn-sm" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Category</Button>
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
                  {Object.keys(CATEGORY_LABEL).sort((a, b) => a - b).map(type =>
                    (<Label for="type" key={type}>
                      <div>
                        <CustomInput
                          type="checkbox"
                          id={type} label={CATEGORY_LABEL[type]}
                          checked={category.includes(CATEGORY_LABEL[type])}
                          onChange={onCategoryChange(CATEGORY_LABEL[type])}
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