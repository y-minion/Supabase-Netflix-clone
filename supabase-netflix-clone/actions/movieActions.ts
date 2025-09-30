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

export async function getMovie(id: number) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .eq("id", id)
    .maybeSingle(); //data를 리스트로 받지 않고, 하나인걸 알고 있으니 한개로 받겠다. 그리고 null일 수도 있다.

  hanldeError(error);

  return data;
}
