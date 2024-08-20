import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_URL_KEY;
const apiKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(apiUrl, apiKey);

export async function setPoints(points, activeUser) {
  const { data, error } = await supabase
    .from("Users")
    .update({ points: activeUser.points + points })
    .eq("id", activeUser.id)
    .select();
}
