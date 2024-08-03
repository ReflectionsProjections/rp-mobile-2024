import axios from "axios";

export const getCurrentOrNext = async (token: string) => {
    try{
        const response = await axios.get('https://api.reflectionsprojections.org/events/currentOrNext', {
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