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

export const homepageQuery = `
*[_type == "homePage"][0]{
  siteTitle,
  hero,
  bestsellers{
    eyebrow,
    heading,
    subheading,
    ctaText,
    featuredItems[]->{
      _id,
      title,
      price,
      shortDescription,
      image,
      tags
    }
  },
  whyFoodie,
  signatureSection,
  menuOverview,
  visitUs,
  ctaBanner
}
`;

export async function getHomepage() {
  return sanityClient.fetch(homepageQuery);
}

export const aboutPageQuery = `
*[_type == "aboutPage"][0]{
  heroImage,
  heroTitle,
  heroSubtitle,
  mainEyebrow,
  mainHeading,
  mainParagraphs,
  shopImage,
  breadEyebrow,
  breadHeading,
  breadParagraphs,
  breadImage
}
`;

export async function getAboutPage() {
  return sanityClient.fetch(aboutPageQuery);
}
