import { setQRCode } from "../redux/actions";

export const getQRCode = async (token: string, callback:Function) => {
    try {
      const response = await fetch('https://api.reflectionsprojections.org/attendee/qr/', {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      console.log(data)
      //dispatch(setQRCode(data.qrCode));
      callback(data.qrCode)
    } catch (error) {
      console.error('Error fetching qrcode:', error);
    };
};