import * as yup from 'yup';

const MIN_QUERY_LENGTH = 3;
const MAX_QUERY_LENGTH = 100;

const REQUIRED_QUERY = 'Search hint, dish type or diet type must be specified!';
const MIN_QUERY_LENGTH_MESSAGE = `Search hint must be ${MIN_QUERY_LENGTH} symbols or longer!`;
const MAX_QUERY_LENGTH_MESSAGE = `Search hint must be shorter than ${MAX_QUERY_LENGTH} symbols!`;

export const validationSchema = yup.object().shape({
    diet: yup.string(),
    dish: yup.string(),
    query: yup
        .string()
        .when(['dish', 'diet'], ([dish, diet], schema) => {
            return dish || diet ? schema : schema.required(REQUIRED_QUERY);
        })
        .min(MIN_QUERY_LENGTH, MIN_QUERY_LENGTH_MESSAGE)
        .max(MAX_QUERY_LENGTH, MAX_QUERY_LENGTH_MESSAGE),
});
