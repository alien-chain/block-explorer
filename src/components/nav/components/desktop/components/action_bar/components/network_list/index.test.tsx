import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import NetworkList from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('@src/components/nav/components', () => ({
  Networks: 'Networks',
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/NetworkList', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <NetworkList
          actionHeight={30}
        />
      </MockTheme>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
