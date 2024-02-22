export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

export type INewUser = {
  companyName: string;
  companyEmail: string;
  companyPhoneNumber: string;
  registrationNumber: string;
  vatNumber: string;
  line1: string;
  line2: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  website: string;
  instagramLink: string;
  twitterLink: string;
  linkedinLink: string;
  metaLink: string;
  bankAccountNumber: string;
  bankSortCode: string;
  bankName: string;
  bankAccountName: string;
  password: string;
  confirmPassword: string;
};
