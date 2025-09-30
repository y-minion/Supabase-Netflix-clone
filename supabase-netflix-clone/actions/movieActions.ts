"use server";

import hanldeError from "utils/supabase/handleError";
import { createServerSupabaseClient } from "utils/supabase/server";

export async function searchMovies(search = "") {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .like("title", `%${search}%`);
  hanldeError(error);

  return data;
}
