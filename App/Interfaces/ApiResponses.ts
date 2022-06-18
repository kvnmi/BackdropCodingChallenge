export interface IPetListings {
  breeds: IPetBreeds[];
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface IPetBreeds {
  bred_for: string;
  breed_group: string;
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: {
    imperial: string;
    metric: string;
  };
}

export interface IFavourites {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: Date;
  image: {
    id: string;
    url: string;
  };
}
