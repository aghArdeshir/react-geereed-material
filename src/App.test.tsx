import React from 'react';
import { render } from '@testing-library/react';
import ReactGeereedMaterial from './ReactGeereedMaterial';

test('renders learn react link', () => {
  const { getByText } = render(<ReactGeereedMaterial />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
