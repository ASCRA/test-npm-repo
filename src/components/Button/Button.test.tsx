import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import Button from './Button';

test('it works', () => {
  const tree = renderer.create(<Button subtle />).toJSON()
  expect(tree).toMatchSnapshot()
})