export const ActionType = {
    LOAD_COURSE: `main/loadCourse`,
    SELECTION_HAVE: `main/selectionHave`,
    SELECTION_WANT: `main/selectionWant`,
    CURRENCY_SELECTION_HAVE: `main/currencyHave`,
    CURRENCY_SELECTION_WANT: `main/currencyWant`,
    INPUT_AVAILABLE: `main/availableCurrency`,
    INPUT_DESIRED: `main/desiredCurrency`,
    PERFORMED_CONVERSIONS: `main/performed`,
    CLEARING_HISTORY: `main/clearingHistory`,
  };
  
export const loadCourse = (course) => ({
    type: ActionType.LOAD_COURSE,
    payload: course
});

export const currencySelectionHave = (currency) => ({
    type: ActionType.CURRENCY_SELECTION_HAVE,
    payload: currency
})

export const currencySelectionWant = (currency) => ({
    type: ActionType.CURRENCY_SELECTION_WANT,
    payload: currency
})

export const inputAvailableCurrency = (quantity) => ({
    type: ActionType.INPUT_AVAILABLE,
    payload: quantity
})

export const inputDesiredCurrency = (quantity) => ({
    type: ActionType.INPUT_DESIRED,
    payload: quantity,
})

export const performedConversions = (performed) => ({
    type: ActionType.PERFORMED_CONVERSIONS,
    payload: performed,
})

export const clearingHistory = (clear) => ({
    type: ActionType.CLEARING_HISTORY,
    payload: clear
})

  