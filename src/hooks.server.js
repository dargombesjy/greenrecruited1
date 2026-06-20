import { PUBLIC_STRAPI_URL } from "$env/static/public";

export async function authHooks({ event, resolve }) {
  const token = event.cookies.get("jwt");

  if (token) {
    try {
      const res = await fetch(`${PUBLIC_STRAPI_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const user = await res.json();
        event.locals.user = user;
        event.locals.token = token;
      } else {
        event.cookies.delete("jwt", { path: "/" });
      }
    } catch (err) {
      console.error("auth hooks error");
    }
  }
  return resolve(event);
}
