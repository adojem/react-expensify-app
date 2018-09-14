import React from 'react';
import { shallow } from 'enzyme';
import NotFoungPage from '../../components/NotFoungPage';

test('should render NotFoundPage correctly', () => {
   const wrapper = shallow(<NotFoungPage />);
   expect(wrapper).toMatchSnapshot();
});
