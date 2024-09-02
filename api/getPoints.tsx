import axios from "axios";

export const getPoints = async (token: string) => {
    try{
        const response = await axios.get('https://api.reflectionsprojections.org/attendee/points/', {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error in catching events:", error);
        throw error;
    }
}