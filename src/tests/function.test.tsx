import counter, {increment, decrement, incrementByAmount, decrementByAmount} from '../store/reducer';
import {fireEvent, getByDisplayValue, getByTestId, render, screen, waitFor} from '@testing-library/react';
import Counter from "../components/counter";
import React from 'react';
import * as reduxHooks from 'react-redux';
import Selector from "../components/selector";
import setValue from '../components/counter'
import store from "../store";
import {timer} from "../store/middleware";
import '@testing-library/jest-dom/extend-expect';


jest.mock('react-redux');

describe('check default state of reducer', () => {
  it('should return default state when passed an empty action', () => {
    const result = counter(undefined, {type : ''});

    expect(result).toEqual({value: 0});
  });
});

describe('functions in reducer', () => {
  it('should increment value by 1', () => {
    const action = {type: increment.type, payload: 1};
    const result = counter({value: 0}, action)
    expect(result).toEqual({value: 1});
  });
  it('should decrement value by 1', () => {
    const action = {type: decrement.type, payload: 1};
    const result = counter({value: 1}, action)
    expect(result).toEqual({value: 0});
  });
  it('should incrementByAmoun value by 1', () => {
    const action = {type: incrementByAmount.type, payload: 2};
    const result = counter({value: 0}, action)
    expect(result).toEqual({value: 2});
  });
  it('should decrementByAmount value by 1', () => {
    const action = {type: decrementByAmount.type, payload: 3};
    const result = counter({value: 3}, action)
    expect(result).toEqual({value: 0});
  });
});

// describe('Timer of update value per 1 second', () => {
//   //jest.useFakeTimers();
//   //jest.spyOn(global, 'setInterval');
//   it('Timer with interval update', async () => {
//     const state = store.getState();
//     expect(state.count.value).toBe(0);
//     // await waitFor(() => {
//     //   expect(state.count.value).not.toBe(0);
//     // });
//     console.log(state.count.value);
//     await new Promise((r) => setTimeout(r, 2000));
//     console.log(state.count.value);
//     expect(state.count.value).not.toBe(0);
//   });
// });


describe('counter', () => {
  it('should create Counter component', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(0);
    const component = render(<Counter />);
    expect(component).toMatchSnapshot();
  });
  it('should change state per 1 second', async () => {
    const { getByTestId, getByText, } = render(<Counter />);
    fireEvent.change(getByTestId('counter'));

    await waitFor(() => {
      expect(getByText('1')).toBeInTheDocument();
    });
  });
});

describe('selector', () => {
  it('should create Selector component', () => {
    const component = render(<Selector value={'1'} setValue={setValue}/>);
    expect(component).toMatchSnapshot();
  });
});


