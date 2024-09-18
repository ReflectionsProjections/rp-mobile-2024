import axios from "axios";

export const getEvents = async (token: string) => {
    try{
        const response = await axios.get('https://api.reflectionsprojections.org/events/', {
            headers: {
                
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error in catching events:", error);
        throw error;
    }
}