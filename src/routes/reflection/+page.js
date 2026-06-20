import { PUBLIC_STRAPI_URL } from '$env/static/public';

export async function load({ params }) {
    const res = await fetch(`${PUBLIC_STRAPI_URL}/api/reflection?populate=main_image&populate[0]=forum_image&populate[1]=todos.todo_image`);
    const json = await res.json();
    return json;
}