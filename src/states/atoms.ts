import { atom, selector } from 'recoil';
import { Todo, Color } from '../types';

export const colorState = atom<Color>({
  key: 'colorState', 
  //default: 'white',
  default: {name:'white'},
});

export const todosState = atom<Todo[]>({
  key: 'todosState', 
  default: [],
});

const colorSelectorState = selector<Color>({
  key: 'colorSelectorState',
  get: ({get}) => get(colorState)
})