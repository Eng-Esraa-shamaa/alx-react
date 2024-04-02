// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
{/*import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });*/}

import Enzyme from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';

import util from 'util';

// Define TextEncoder in the global scope
Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});


Enzyme.configure({ adapter: new Adapter() });