import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  CustomInput,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filterValues.length < 2) {
      this.setState({ collapse: false });
    }
  }

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  }

  render() {
    const {
      filterAddedValues,
      onFilterChange,
      onFilterClear,
      filterValues,
      filterLabel,
    } = this.props;

    const { collapse } = this.state;

    return (
      <div>
        <Button
          className={filterValues.length > 1
            ? 'sort-filter btn-outline-primary'
            : 'sort-filter btn-outline-primary disabled'}
          onClick={filterValues.length > 1 ? this.toggle : null}
          style={{ marginBottom: '1rem' }}
        >
          {`Sort by ${filterLabel}`}
        </Button>
        <Collapse isOpen={collapse}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label
                    for={`all${filterLabel}`}
                    key={`all${filterLabel}`}
                  >
                    {`Choose ${filterLabel}`}
                    <CustomInput
                      type="checkbox"
                      id={`all${filterLabel}`}
                      label="All"
                      checked={filterAddedValues.length === 0}
                      onChange={onFilterClear(filterLabel)}
                    />
                  </Label>
                  {filterValues.map(value => (
                    <div key={value}>
                      <Label for={value}>
                        <CustomInput
                          type="checkbox"
                          id={value}
                          label={value}
                          checked={filterAddedValues.includes(value)}
                          onChange={onFilterChange(value, filterLabel)}
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

Filter.propTypes = {
  filterAddedValues: PropTypes.instanceOf(Array).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired,
  filterValues: PropTypes.instanceOf(Array).isRequired,
  filterLabel: PropTypes.string.isRequired,
};

export default Filter;
