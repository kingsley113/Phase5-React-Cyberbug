export const analyzeText = (text) => {
  return (dispatch) => {
    fetch(
      `https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/d2506413-bfa5-430c-884a-ef1e2d68ee20/v1/analyze}?version=2021-08-01&text=${text}`,
      {
        method: "GET",
        headers: {
          apikey: "Vapp2bohczm8zOP3-Mv6Ws209uXspSC5zrl0JmtI_aTW",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };
};
