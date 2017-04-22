import { ACTION_A } from './actions';

export default function observerA(action) {
  switch (action.type) {
    case ACTION_A:
      setTimeout(() => console.log('observerA: ', action.type), 5000);
      break;
    default:
      break;
  }
}
