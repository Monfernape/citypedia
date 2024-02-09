"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Review } from "./components/Review";
import { AttorneyListing } from "./components/AttorneyListing";
import { Embed } from "./components/Embed";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { RemoveIcon } from "@/components/assets/icons/Remove";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 5 characters.",
  }),
});

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [rating, setRating] = useState(0);
  const [value, setValue] = useState({
    header_img: {},
    article: {
      title: "",
      text: "",
    },
    attornery_listing: [
      {
        id: "",
        name: "",
        adress: "",
      },
    ],
    embed: [
      {
        id: "",
        text: "",
      },
    ],
    review: [
      {
        id: "",
        name: "",
        text: "",
        review: 0,
      },
    ],
  });

  const handleAddProperties = () => {
    let updated = [...(value.attornery_listing || [])];

    const newdata = {
      id: "",
      name: "",
      adress: "",
    };

    updated = [...updated, newdata];

    setValue({
      ...value,
      attornery_listing: updated,
    });
  };

  const handleRemoveProperty = (index: number) => {
    let updated = [...(value.attornery_listing || [])];

    updated.splice(index, 1);

    setValue({
      ...value,
      attornery_listing: updated,
    });
  };

  console.log("hello", value);

  const handleClick = (value: any) => {
    if (value === rating) {
      // If the clicked star is already selected, toggle it off
      setRating(0);
    } else {
      // Otherwise, set the rating to the value of the clicked star
      setRating(value);
    }
  };

  return (
    <div className="max-w-3xl m-auto p-4 shadow-sm rounded mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Label>Header Image</Label>
          <Input id="picture" type="file" />
          <Separator className="my-4" />
          <div className="flex flex-col gap-2">
            <Label>Article</Label>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col gap-2">
            <Label>Attorney Listing</Label>
            {value.attornery_listing.map((item: any, index: number) => (
              <>
                <div className="flex gap-2 items-center">
                  <FormField
                    // control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Name" />
                        </FormControl>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="outline"
                    type="button"
                    disabled={index === 0}
                    onClick={() => handleRemoveProperty(item.id)}
                  >
                    <RemoveIcon />
                  </Button>
                </div>
                <FormField
                  // control={form.control}
                  name="adress"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Adress" />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                {index !== value.attornery_listing.length - 1 && (
                  <Separator className="my-4" /> // Add your separator here, e.g., <hr />, <div className="separator" />, etc.
                )}
              </>
            ))}
            <div className="flex justify-end">
              {/* <Button onClick={handleAddProperties}>
                Add Prop
              </Button> */}
              <AttorneyListing handleClick={handleAddProperties} />
            </div>
          </div>
          <Separator className="my-4" />
          <Label>Embed code</Label>
          <div className="flex gap-2">
            <FormField
              // control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea placeholder="Tex" />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <Button variant="outline" type="button">
              <RemoveIcon />
            </Button>
          </div>
          <div className="flex justify-end mt-2">
            <Embed />
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col gap-2">
            <Label>Reviews</Label>
            <div className="flex gap-2">
              <FormField
                // control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Name" />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <Button variant="outline" type="button">
                <RemoveIcon />
              </Button>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <span
                    key={index}
                    onClick={() => handleClick(starValue)}
                    style={{ cursor: "pointer" }}
                  >
                    {starValue <= rating ? "★" : "☆"}
                  </span>
                );
              })}
            </div>
            <div className="flex justify-end">
              <Review />
            </div>
          </div>

          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6U6qgCrw0Ls?si=hF-pg9CJHiUlVkSG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
