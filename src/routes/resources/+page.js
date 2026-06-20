import { PUBLIC_STRAPI_URL } from '$env/static/public';

export async function load({ params }) {
    const res = await fetch(`${PUBLIC_STRAPI_URL}/api/resource?populate[0]=videos.thumbnail&populate[1]=news.thumbnail&populate[2]=articles.thumbnail`);
    const json = await res.json();
    return json;
}