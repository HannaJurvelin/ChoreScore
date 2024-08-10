import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_URL_KEY;
const apiKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(apiUrl, apiKey);

export async function getChores() {
  let { data: Chores, error } = await supabase.from("Chores").select("*");
  return Chores;
}

export async function getUsers() {
  let { data: Users, error } = await supabase.from("Users").select("*");
  return Users;
}
