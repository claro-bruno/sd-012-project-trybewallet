import STORE_EMAIL from "./actionsTypes";

const storeEmail = (email) => ({
    type: STORE_EMAIL,
    email,
});

export default storeEmail;
