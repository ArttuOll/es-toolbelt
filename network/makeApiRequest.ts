import { isNil } from "lodash";

function makeApiRequest(method: string) {
  return function withPath(path: string) {
    return async function withBody(body?: any) {
      // Backend base-url defined in the window object assumed. Adjust to taste.
      const apiUrl = `${(window as any).backendUrl}${path}`;
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: isNil(body) ? JSON.stringify({}) : JSON.stringify(body),
      });
      return await response.json();
    };
  };
}

const makePutRequest = makeApiRequest("PUT");
const makePostRequest = makeApiRequest("POST");
const makeDeleteRequest = makeApiRequest("DELETE");
const makeGetRequest = makeApiRequest("GET");

export { makePostRequest, makePutRequest, makeDeleteRequest, makeGetRequest };
