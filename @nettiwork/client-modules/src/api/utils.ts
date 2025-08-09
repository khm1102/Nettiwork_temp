import qs from "qs";

const API_BASE_URL = "http://127.0.0.1:3000/api";
const DEFAULT_HEADER = {
  "Content-Type": "application/json",
};

/**
 * 응답에서 JSON 데이터를 가져옴.
 * JSON 응답안에 error가 포함되어 있다면 `throw error`
 *
 * @param response
 */
async function getJSONFromResponse(response: Response): Promise<object> {
  const json = await response.json();

  if ("error" in json) {
    throw json.error;
  }
  return json;
}

/**
 * API 서버로 GET 요청
 *
 * @param path API_BASE_URL + `/get/profile` <-
 * @param params
 * @param baseUrl API_BASE_URL -> baseUrl
 * @param header
 * @returns `JSON object`
 */
export async function getJSON(
  path: string,
  params: object,
  baseUrl?: string,
  header?: object,
): Promise<Object> {
  const response = await fetch(
    `${baseUrl ? baseUrl : API_BASE_URL}${path}?${qs.stringify(params)}`,
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        ...DEFAULT_HEADER,
        ...header,
      },
    },
  );

  return await getJSONFromResponse(response);
}

/**
 * API 서버로 POST 요청
 *
 * @param path API_BASE_URL + `/get/profile` <-
 * @param body
 * @param baseUrl API_BASE_URL -> baseUrl
 * @param header
 * @returns `JSON object`
 */
export async function postJSON(
  path: string,
  body: object,
  baseUrl?: string,
  header?: object,
): Promise<object> {
  const response = await fetch((baseUrl ? baseUrl : API_BASE_URL) + path, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      ...DEFAULT_HEADER,
      ...header,
    },
    body: JSON.stringify(body),
  });

  return await getJSONFromResponse(response);
}
