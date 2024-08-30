export async function getYoutubeLastVideo() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_API_KEY_YOUTUBE}&channelId=${process.env.NEXT_PUBLIC_ID_CHANNEL}&part=snippet&maxResults=3&order=date`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export async function GetYoutubeManyLike() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_API_KEY_YOUTUBE}&channelId=${process.env.NEXT_PUBLIC_ID_CHANNEL}&part=snippet&maxResults=5&order=rating`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
