export const UPDATE_INPUT = 'UPDATE_INPUT';
export const RESULT = 'RESULT';

export const updateInput = (name, value) => ({
    type: UPDATE_INPUT,
    payload: { name, value }
});

export const result = (operator) => ({
    type: RESULT,
    payload: { operator }
});
