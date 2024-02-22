import * as z from "zod";
import { useForm } from "react-hook-form";
import { useStore } from "../../store/clients";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
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

import { Card, CardContent } from "@/components/ui/card";

import { NewClientValidation } from "@/lib/validation";

const NewClientForm = () => {
  const addNewClient = useStore((state) => state.addNewClient);
  const navigate = useNavigate();

  // Form Validation
  const form = useForm<z.infer<typeof NewClientValidation>>({
    resolver: zodResolver(NewClientValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      phoneNumber: "",
      emailAddress: "",
      line1: "",
      line2: "",
      city: "",
      country: "",
      postalCode: "",
    },
  });

  // Handler
  const handleNewClient = async (user: z.infer<typeof NewClientValidation>) => {
    const obj = {
      id: uuidv4().toString(),
      name: user.firstName,
      address: user.line1,
      tags: "",
      status: "failed",
      ...user,
    };
    addNewClient(obj);
    // console.log(user)

    navigate("/clients");
  };

  return (
    <Form {...form}>
      <div className="flex">
        <div className="w-full h-full flex flex-col items-center ">
          <h2 className="h3-bold md:h2-bold">Client Details</h2>

          <form
            onSubmit={form.handleSubmit(handleNewClient)}
            className="flex flex-col gap-5 w-full mt-4"
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-1 h-full flex">
                <Card className="w-full sm:w-[30em] flex flex-col">
                  <CardContent className="w-full flex-grow">
                    <h2 className="h3-bold md:h2-bold">New Client</h2>

                    <span className="text-4xl font-semibold">
                      <span className="flex gap-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-black">
                                First Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your first name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-black">
                                Last Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your last name.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                      </span>
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">
                              Company Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This is your Company name.
                            </FormDescription>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This is your phone number.
                            </FormDescription>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="emailAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This your Email address
                            </FormDescription>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        )}
                      />
                    </span>
                  </CardContent>
                </Card>
              </div>

              <div className="p-1 h-full flex">
                <Card className="w-full sm:w-[30em] flex flex-col">
                  <CardContent className="w-full flex-grow">
                    <h2 className="h3-bold md:h2-bold">Address</h2>
                    <span className="text-4xl font-semibold">
                      <FormField
                        control={form.control}
                        name="line1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">
                              Address First Line
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This is your Address First Line.
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
                            <FormLabel className="text-black">
                              Address Second Line
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This is your Address Second Line.
                            </FormDescription>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        )}
                      />
                      <span className="flex gap-2">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-black">City</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your City.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-black">
                                Country
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is your Country.
                              </FormDescription>
                              <FormMessage style={{ color: "red" }} />
                            </FormItem>
                          )}
                        />
                      </span>
                    </span>
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">
                            Post Code
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="h-12 bg-off-white border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            This is your Post Code.
                          </FormDescription>
                          <FormMessage style={{ color: "red" }} />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            <Button type="submit" className="shad-button_primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Form>
  );
};

export default NewClientForm;
