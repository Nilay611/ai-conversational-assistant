export const sendMessageToBackend = async (message: string) => {
  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from the backend");
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error communicating with backend:", error);
    return "Sorry, an error occurred while processing your request.";
  }
};
