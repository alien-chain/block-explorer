import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgEditValidator } from '@models';
import EditValidator from '.';

// ==================================
// mocks
// ==================================
jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => ({
      moniker: 'moniker',
      imageUrl: null,
    })),
  }),
}));

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/EditValidator', () => {
  it('matches snapshot', () => {
    const message = new MsgEditValidator({
      category: 'staking',
      type: 'MsgEditValidator',
      description: {
        moniker: 'forbole',
        identity: '',
        website: '',
        securityContact: '',
        details: '',
      },
      validatorAddress: 'validatorAddress',
      commissionRate: '0.1',
      minSelfDelegation: '0.1',
    });
    const component = renderer.create(
      <MockTheme>
        <EditValidator
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
