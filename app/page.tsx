import { getBattery } from "@/services/getBattery";

export default async function Home() {
  let battery = null;
  try {
    battery = await getBattery();
  } catch (error) {
    console.error("Error fetching battery data:", error);
  }

  if (!battery) {
    return <div>Something went wrong on our side. Please notify us.</div>;
  }
  return <div className="">Battery data: {JSON.stringify(battery)}</div>;
}
