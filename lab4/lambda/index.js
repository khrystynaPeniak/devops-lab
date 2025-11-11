exports.handler = async (event) => {
  console.log("Lambda event:", event);
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from AWS!" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Something went wrong!" }),
    };
  }
};
