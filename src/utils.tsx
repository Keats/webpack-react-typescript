import Cl from "./Cloudinary";

export interface UtilsPropsSrc {
  publicId: any;
  width: any;
}

export interface UtilsPropsSrcSet {
  publicId: any;
  widths: any;
}

export const getSrc = ({ publicId, width }: UtilsPropsSrc) =>
  Cl.url(publicId, {
    crop: "scale",
    width
  });

export const getSrcSet = ({ publicId, widths }: UtilsPropsSrcSet) =>
  widths.map((width: any) => `${getSrc({ publicId, width })} ${width}w`).join(", ");
