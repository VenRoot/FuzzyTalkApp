// Definieren Sie die Anfangszustände und deren Typen
type State = {
  retry: boolean,
  loading: boolean,
  pics: string[],
  error: boolean,
};

const initialState: State = {
  retry: false,
  loading: true,
  pics: [],
  error: false,
};

// Definieren Sie Aktionstypen
type Action =
  | { type: 'SET_RETRY'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_PICS'; payload: string[] }
  | { type: 'SET_ERROR'; payload: boolean };

// Definieren Sie einen Reducer
export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_RETRY':
      return { ...state, retry: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_PICS':
      return { ...state, pics: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      throw new Error();
  }
}

export { initialState as initialChatListState };