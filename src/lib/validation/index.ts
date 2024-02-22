import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  companyName: z
    .string()
    .min(2, { message: "Company Name must be at least 2 characters." }),
  companyEmail: z.string().email(),
  companyPhoneNumber: z
    .string()
    .min(2, { message: "Company Phone Number must be at least 2 numbers." }),
  registrationNumber: z
    .string()
    .min(2, { message: "Registration Number must be at least 2 numbers." }),
  vatNumber: z
    .string()
    .min(2, { message: "VAT Number must be at least 2 characters." }),
  line1: z
    .string()
    .min(4, { message: "Line 1 must be at least 4 characters " }),
  line2: z.string(),
  street: z
    .string()
    .min(4, { message: "Street must be at least 4 characters " }),
  city: z.string().min(4, { message: "City must be at least 4 characters " }),
  postalCode: z
    .string()
    .min(4, { message: "Postal Code must be at least 4 characters " }),
  country: z
    .string()
    .min(4, { message: "Country must be at least 4 characters " }),
  website: z.string(),
  instagramLink: z.string(),
  twitterLink: z.string(),
  linkedinLink: z.string(),
  metaLink: z.string(),
  bankAccountNumber: z
    .string()
    .min(4, { message: "Bank Account Number must be at least 4 characters " }),
  bankAccountName: z
    .string()
    .min(4, { message: "Bank Account Name must be at least 4 characters " }),
  bankSortCode: z
    .string()
    .min(4, { message: "Bank Sort Code must be at least 4 characters " }),
  bankName: z
    .string()
    .min(4, { message: "Bank Name must be at least 4 characters " }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

// ============================================================
// Adding New Client to Clients Table
// ============================================================
export const NewClientValidation = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be at least 3 characters." }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be at least 3 characters." }),
  companyName: z
    .string()
    .min(3, { message: "Company Name must be at least 3 characters." }),
  phoneNumber: z
    .string()
    .min(8, { message: "Phone Number must be at least 8 characters." }),
  emailAddress: z.string().email(),
  line1: z
    .string()
    .min(8, { message: "First Line Name must be at least 8 characters." }),
  line2: z.string(),
  city: z.string().min(3, { message: "City must be at least 3 characters." }),
  country: z
    .string()
    .min(3, { message: "Country must be at least 3 characters." }),
  postalCode: z
    .string()
    .min(4, { message: "Postal Code must be at least 4 characters." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Minimum 5 characters." })
    .max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(1, { message: "This field is required" })
    .max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});
