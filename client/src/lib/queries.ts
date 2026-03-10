import { sanityClient } from "./sanity";

export const menuItemsQuery = `
*[_type == "menuItem"] | order(category asc, title asc){
  _id,
  title,
  category,
  price,
  shortDescription,
  image,
  tags
}
`;

export async function getMenuItems() {
  return sanityClient.fetch(menuItemsQuery);
}
