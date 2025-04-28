import userSlice from "../userSlice";

const actions = userSlice.actions;
export const fetchUserMiddleWare = (streamTypedValue) => {
    return async function (dispatch) {
        try {
            dispatch(actions.setUserLoading());

            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${streamTypedValue}`);
            const userRes = await resp.json();

            console.log("userRes: ", userRes);
            dispatch(actions.setUserData(userRes));
        } catch (err) {
            dispatch(actions.setError());
        }
    }
}