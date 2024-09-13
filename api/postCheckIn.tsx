import axios from "axios";

export const postCheckIn = async(token, eventId, qrCode) => {
    const payload = { eventId, qrCode }
    try {
        const response = await axios.post('https://api.reflectionsprojections.org/scan/staff/', payload, {
            headers: {
                Authorization: token
            }
        });
        console.log('post CheckIn:', response.data)
    } catch (error) {
        console.log('Error posting check in:', error)
        alert(`Error with scanning QR Code!`);
    }
};