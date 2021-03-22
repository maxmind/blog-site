import PropTypes from 'prop-types';
import * as React from 'react';

import Schema, { ISchema } from './Schema';

interface IMinFraudSchema extends Omit<ISchema, 'productFamily'> {
  services?: MinFraudServices;
}

const MinFraudSchema: React.FC<IMinFraudSchema> = (props) => {

  return (
    <Schema
      productFamily="minfraud"
      {...props}
    />
  );
};

MinFraudSchema.propTypes = {
  ...Schema.propTypes,
  services: PropTypes.oneOfType([
    PropTypes.oneOf([
      '*',
    ] as const),
    PropTypes.arrayOf(
      PropTypes.oneOf([
        'score',
        'insights',
        'factors',
      ] as const).isRequired,
    ),
  ]),
};

export default MinFraudSchema;
