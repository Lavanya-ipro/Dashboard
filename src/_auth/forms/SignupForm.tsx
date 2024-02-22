import * as z from "zod";
// import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

import {
  useCreateUserAccount,
  useSignInAccount,
} from "@/lib/react-query/queries";
import { SignupValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";

const SignupForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      companyName: "",
      companyEmail: "",
      companyPhoneNumber: "",
      password: "",
      confirmPassword: "",
      line1: "",
      line2: "",
      street: "",
      city: "",
      postalCode: "",
      country: "",
      website: "",
      instagramLink: "",
      twitterLink: "",
      linkedinLink: "",
      metaLink: "",
      bankAccountNumber: "",
      bankAccountName: "",
      bankSortCode: "",
      bankName: "",
      registrationNumber: "",
      vatNumber: "",
    },
  });

  // Queries
  const { mutateAsync: createUserAccount, isLoading: isCreatingAccount } =
    useCreateUserAccount();
  const { mutateAsync: signInAccount, isLoading: isSigningInUser } =
    useSignInAccount();

  // Handler
  const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
    try {
      // Perform the actual API request using Axios
      //  const apiEndpoint = 'your_api_endpoint_here'; // Replace with your actual API endpoint
      //  const response = await axios.post(apiEndpoint, {
      //    // Include the necessary data in the request body
      //    // Example: user,
      //    // Example: any additional data you need to send
      //  },
      // {
      // headers: {"Content-type" :'application/json'},
      // withCredenitals: true
      // });

      // Handle the API response as needed
      // Example: console.log(response.data);
      // Example: console.log(response.accessToken);
      // Example: console.log(JSON.stringify(response));
      // setSuccess(true);
      console.log(user, "USER SIGN UP");
      const newUser = await createUserAccount(user);
      if (!newUser) {
        toast({ title: "Sign up failed. Please try again." });

        return;
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        toast({ title: "Something went wrong. Please login your new account" });

        navigate("/sign-in");

        return;
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();

        navigate("/");
      } else {
        toast({ title: "Login failed. Please try again." });

        return;
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Form {...form}>
      <div className="sm:w-420 sign-up-form flex-center flex-col">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          style={{ marginTop: "7em" }}
        />

        <h2 className="h3-bold md:h2-bold">Create a new account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use iPro Suite, Please enter your details
        </p>

        <form
          onSubmit={form.handleSubmit(handleSignup)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <Carousel className="h-full w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="h-full">
                <div className="p-1 h-full flex items-center justify-center">
                  <Card className="w-full h-full">
                    <CardContent>
                      <span className="text-4xl font-semibold">
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Company Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="companyEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Company Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="companyPhoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Company Phone Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Password
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="password"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Confirm Password
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="password"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent>
                      <span className="text-4xl font-semibold">
                        {" "}
                        <FormField
                          control={form.control}
                          name="line1"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Address Line 1
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="line2"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Address Line 2
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="street"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Street
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <span className="flex gap-4">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="shad-form_label">
                                  City
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    className="shad-input"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  This is your public display name.
                                </FormDescription>
                                <FormMessage style={{ color: "red" }} />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="postalCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="shad-form_label">
                                  Postal Code
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    className="shad-input"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  This is your public display name.
                                </FormDescription>
                                <FormMessage style={{ color: "red" }} />
                              </FormItem>
                            )}
                          />
                        </span>
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Country
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4">
                <div className="p-1">
                  <Card>
                    <CardContent>
                      <span className="text-4xl font-semibold">
                        {" "}
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Website
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="instagramLink"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Instagram Link
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="twitterLink"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Twitter Link
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="linkedinLink"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                LinkedIn Link
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="metaLink"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Meta Link
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4">
                <div className="p-1">
                  <Card>
                    <CardContent>
                      <span className="text-4xl font-semibold">
                        {" "}
                        <FormField
                          control={form.control}
                          name="bankAccountNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Bank Account Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="bankSortCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Bank Sort Code
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="bankName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Bank Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="bankAccountName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Bank Account Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4">
                <div className="p-1">
                  <Card>
                    <CardContent>
                      <span className="text-4xl font-semibold">
                        {" "}
                        <FormField
                          control={form.control}
                          name="registrationNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                Registration Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="vatNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="shad-form_label">
                                VAT Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="shad-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your public display name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious type="button" style={{ color: "black" }} />
            <CarouselNext type="button" style={{ color: "black" }} />
          </Carousel>

          <Button type="submit" className="shad-button_primary">
            {isCreatingAccount || isSigningInUser || isUserLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
