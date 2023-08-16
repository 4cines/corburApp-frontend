import { pawSharp } from "ionicons/icons";

const backend = "http://localhost:3000";

export const loginService = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
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

export const getUserService = async ({ token }: { token: string }) => {
  const response = await fetch(`${backend}/users/info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getClientsService = async (token: string) => {
  const response = await fetch(`${backend}/costumers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};
