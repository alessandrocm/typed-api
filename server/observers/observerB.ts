import { ACTION_A, ACTION_B } from './actions';

export default function observerB(action) {
  switch (action.type) {
    case ACTION_A:
      console.log('observerB: ', action.type);
      break;
    case ACTION_B:
      setTimeout(() => console.log('observerB: ', action.type), 5000);
      break;
    default:
      break;
  }
}
