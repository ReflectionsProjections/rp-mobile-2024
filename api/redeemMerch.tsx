import axios from "axios";

export const redeemMerch = async (token: string, merch: string) => {
  try {
    const response = await axios.post(
      `https://api.reflectionsprojections.org/attendee/redeemMerch/${merch}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in redeeming merch:", error);
    throw error;
  }
};
