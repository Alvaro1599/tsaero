export interface Login {
  access_token: string;
  token_type:   string;
  expires_in:   number;
  user:         User;
}

export interface User {
  id:                number;
  name:              string;
  surname:           string;
  num_doc:           number;
  phone:             number;
  ocupation:         string;
  genre:             string;
  bithday:           Date;
  email:             string;
  personalEmail:     null;
  nationality:       null;
  country:           string;
  city:              string;
  photo:             null;
  bg_image:          null;
  description:       null;
  interests:         string;
  licencia:          string;
  facebook:          null;
  instagram:         null;
  email_verified_at: null;
  rol:               number;
  linkRecomendation: null;
  qualification:     null;
  status:            boolean;
  created_at:        Date;
  updated_at:        Date;
}
export interface DataLogin{
  email:string,
  password:string
}