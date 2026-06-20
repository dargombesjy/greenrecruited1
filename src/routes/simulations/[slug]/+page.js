import { PUBLIC_STRAPI_URL } from '$env/static/public';

export async function load({ params }) {
	const res = await fetch(
		`${PUBLIC_STRAPI_URL}/api/simulations?filters[name]=${params.slug}&populate=*`
	);
	const json = await res.json();
	return json;
}
