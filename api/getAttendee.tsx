import { setAttendee } from "../redux/actions";

export const getAttendee = (token: string) => {
    return async (dispatch: any) => {
      let clone;
        try {
          const response = await fetch('https://api.reflectionsprojections.org/attendee/', {
            headers: {
              Authorization: token
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          dispatch(setAttendee(data));
        } catch (error) {
          console.error('Error fetching attendee:', error);
          if (clone) {
            clone.text().then((bodyText) => {
              console.log('Received the following instead of valid JSON:', bodyText);
            }).catch(err => {
              console.error('Error reading the response body:', err);
            })
          }
        }
    };
};

//potentially optimizec