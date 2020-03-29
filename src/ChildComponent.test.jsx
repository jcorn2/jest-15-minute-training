import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16'; 
import ChildComponent from './ChildComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('render tests', () => {
    let fetchData;

    beforeAll(() => {
        fetchData = jest.fn();
        fetchData.mockReturnValue(new Promise((resolve) => resolve([])));
    });

    it('renders without crashing', async () => {
        await act(async () => {
            mount(<ChildComponent fetchData={fetchData} />);
            await Promise.resolve();
        });
    });
});

