import { UPDATE_INPUT, RESULT } from './action';

const initialState = {
    num1: '',
    num2: '',
    result: ''
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_INPUT:
            return { ...state, [action.payload.name]: action.payload.value };
        case RESULT:
            const { num1, num2 } = state;
            if (num1 === '' || num2 === '') {
                alert('Ошибка');
                return { ...state, result: '' }
            }
            const result = eval(`${num1} ${action.payload.operator} ${num2}`);
            return { ...state, result };
        default:
            return state;
    }
}

export default Reducer;
