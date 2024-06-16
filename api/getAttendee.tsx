import { setAttendee } from "../redux/actions";

export const getAttendee = (token: string) => {
    return async (dispatch: any) => {
        try {
          const response = await fetch('/attendee/', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          const data = await response.json();
          dispatch(setAttendee(data));
        } catch (error) {
          console.error('Error fetching attendee:', error);
        }
    };
};

//potentially optimize