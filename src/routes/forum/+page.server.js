import { error, fail, redirect } from "@sveltejs/kit";
import { PUBLIC_STRAPI_URL } from "$env/static/public";

export function load({ locals }) {
  if (!locals.user) {
    console.log("not logged in");
    // throw redirect(303, "/auth/login");
  }
}

export async function actions({ request, locals }) {
  if (!locals.user || !locals.jwt) {
    throw error(401, "Unauthorized");
  }

  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  const payload = {
    data: {
      title,
      content,
      author: locals.user.id,
    },
  };

  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/forum-posts`, {
    method: "",
  });
}
