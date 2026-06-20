import { PUBLIC_STRAPI_URL } from '$env/static/public';

export async function load({ params }) {
    const res = await fetch(`${PUBLIC_STRAPI_URL}/api/about?populate=main_image&populate[0]=about_items.image`);
    const json = await res.json();
    return json;
}