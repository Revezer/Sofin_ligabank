import {ActionType} from './action';
import moki from '../mocks/kurs';

const initialState = {
  course: moki,
  isDataLoaded: false,
  selectedWant: `USD`,
  selectedHave: `RUB`,
  thereCurrencies : ``,
  wantCurrency : ``,
  performedConversions: [],
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COURSE:
      return {
        ...state,
        course: action.payload,
        isDataLoaded: true,
      };
    case ActionType.CURRENCY_SELECTION_HAVE:
      return {
        ...state,
        selectedHave: action.payload,
      }
    case ActionType.CURRENCY_SELECTION_WANT:
      return {
        ...state,
        selectedWant: action.payload,
      }
    case ActionType.INPUT_AVAILABLE:
      return {
        ...state,
        thereCurrencies: action.payload,
      }
    case ActionType.INPUT_DESIRED:
      return {
        ...state,
        wantCurrency: action.payload,
      }
    case ActionType.PERFORMED_CONVERSIONS:
      return {
        ...state,
        performedConversions: action.payload,
      }
    case ActionType.CLEARING_HISTORY:
      return {
        ...state,
        performedConversions: action.payload,
      }
  }
  return state;
};

export default reduser;
