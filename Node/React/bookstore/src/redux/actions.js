export const authSetLoggedUser = (user) => ({
    type: "Connect",
    user: user
});

export const connectUser = (email,password) => (dispatch, _, api) => (
    api.authService.connect(email, password).then(
        (user) => dispatch(authSetLoggedUser(user))
    )
);

export const disconnectUser = () => ({
    type: 'Disconnect'
});