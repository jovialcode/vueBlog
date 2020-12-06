export default ({ store, redirect }) => {
    if (store.state.auth.accessToken) {
        return redirect('/')
    }
}
