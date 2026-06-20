import { error, fail, fil, redirect } from "@sveltejs/kit";
import { PUBLIC_STRAPI_URL } from "$env/static/public";

export async function actions({ request, cookies }) {
  const data = await request.formData();
  const identifier = data.get("email");
  const password = data.get("password");

  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  });

  const result = await res.json();
  if (!res.ok) {
    return fail(400, { error: result.error?.message || "Login failed" });
  }

  cookies.set({
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    // secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  throw redirect(303, "/");
}
