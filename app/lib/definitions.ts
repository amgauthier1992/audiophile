// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// These types are generated automatically if you're using an ORM such as Prisma.

export type CallbackVoid = () => void;

export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Product {
  id: number;
  slug: string;
  shortName: string;
  name: string;
  image: Image;
  cartImage: string;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: Image;
    second: Image;
    third: Image;
  };
  others: {
    id: number;
    slug: string;
    name: string;
    image: Image;
    type: string;
  }[];
}
