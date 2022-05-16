import { AssetStatus } from "../components/AssetMenu/AssetMenu";

interface KeyValue {
  key: string;
  value: string;
}

export interface AssetDetails {
  dataParsed: KeyValue[];
}

export interface GalleryItem {
  mediumUrl: string;
}

export interface Images {
  placeholder: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailFlatten: string;
  medium: string;
  mediumAlt: string;
  mediumFlatten: string;
}

export interface Asset {
  id: string;
  label: string;
  model: string;
  status: AssetStatus;
  heroColour: string;
  heroImage: string;
  images: Images;
  assetDetails: AssetDetails[];
  gallery: GalleryItem[];
}

export interface Assets {
  assets: Asset[];
}
