export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
});

export const setAttendee = (attendee) => ({
    type: 'SET_ATTENDEE',
    payload: attendee
})

export const setQRCode = (qrcode) => ({
    type: 'SET_QRCODE',
    payload: qrcode
})

export const logout = () => ({
    type: 'LOGOUT',
});