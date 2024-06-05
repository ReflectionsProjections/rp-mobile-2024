export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
});

export const setAttendee = (attendee) => ({
    type: 'SET_ATTENDEE',
    payload: attendee
})

export const logout = () => ({
    type: 'LOGOUT',
});