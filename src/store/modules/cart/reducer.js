import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(action.payload);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      const { id, amount } = action.payload;

      if (amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(amount);
        }
      });
    }
    default:
      return state;
  }
}
