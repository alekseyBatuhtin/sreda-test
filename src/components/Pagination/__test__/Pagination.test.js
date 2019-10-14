import React from 'react';
import { shallow } from 'enzyme';

import Pagination from '../Pagination';

describe('Pagination test', () => {
  test('null component when no pages', () => {
    const wrapper = shallow(<Pagination hasNextPage={false} hasPreviousPage={false} />);
    expect(wrapper.type()).toEqual(null);
    wrapper.setProps({ hasNextPage: true });
    expect(wrapper.type()).not.toEqual(null);
  });
});
