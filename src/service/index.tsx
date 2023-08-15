import { pawSharp } from "ionicons/icons";

const backend = "http://localhost:3000";

export const loginService = async (userName: string, password: string) => {
  const response = await fetch(`${backend}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
};

const getClientsService = async (token: string) => {
  const response = await fetch(`${backend}/costumers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};
