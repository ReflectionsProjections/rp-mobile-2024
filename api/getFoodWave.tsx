import axios from "axios";

export const getFoodWave = async (token: string) => {
    try{
        const response = await axios.get('https://api.reflectionsprojections.org/attendee/foodwave/', {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error in catching food wave:", error);
        throw error;
    }
}