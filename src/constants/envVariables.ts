// Local machine variables
// const FULL_RECIPE_LINK = import.meta.env.VITE_FULL_RECIPE_LINK;
// const API_URI = import.meta.env.VITE_API_URI;
// const APP_ID = import.meta.env.VITE_APP_ID;
// const APP_KEY = import.meta.env.VITE_APP_KEY;

// Github Pages variables
const FULL_RECIPE_LINK = process.env.FULL_RECIPE_LINK;
const API_URI = process.env.API_URI;
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

export const ENV_VARIABLES = {
    FULL_RECIPE_LINK,
    API_URI,
    APP_ID,
    APP_KEY,
};
