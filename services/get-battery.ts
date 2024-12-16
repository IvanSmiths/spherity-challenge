const API_BATTERY_ENDPOINT: string | undefined =
  process.env.API_BATTERY_ENDPOINT;

if (!API_BATTERY_ENDPOINT) {
  throw new Error("API endpoint is not defined.");
}

export async function getBattery() {
  const res: Response = await fetch(`${API_BATTERY_ENDPOINT}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
