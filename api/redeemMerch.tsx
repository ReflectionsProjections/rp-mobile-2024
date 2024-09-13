import axios from "axios";

export const redeemMerch = async (
  token: string,
  merch: string,
  userID: string
) => {
  const payload = { userID };
  try {
    const response = await axios.post(
      `https://api.reflectionsprojections.org/attendee/redeemMerch/${merch}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error in redeeming merch:", error);
    throw error;
  }
};
