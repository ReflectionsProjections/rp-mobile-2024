import { setQRCode } from "../redux/actions";

export const getQRCode = (token: string) => {
    return async (dispatch: any) => {
        try {
          const response = await fetch('https://api.reflectionsprojections.org/attendee/qr/', {
            headers: {
              Authorization: token,
              'Content-Type': 'application/json'
            },
          });
          const data = await response.json();
          dispatch(setQRCode(data.qrCode));
        } catch (error) {
          console.error('Error fetching qrcode:', error);
        }
    };
};