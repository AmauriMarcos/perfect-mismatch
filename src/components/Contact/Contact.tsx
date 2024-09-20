"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useWindowSize from "react-use/lib/useWindowSize";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import BeatLoader from "react-spinners/BeatLoader";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

const formSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(1, {
    message: "Message cannot be empty.",
  }),
});

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mjkbqwbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          message: values.message,
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setShowConfetti(true);
        form.reset(); // Reset form fields after successful submission
        setIsLoading(false);
      } else {
        setSubmissionStatus("error");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
      setSubmissionStatus("error");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false); // Stop showing confetti after 2 seconds
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="overflow-x-hidden mt-5 md:mt-[50px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col mb-[5rem]">
      <h2 className="text-[1.5rem] md:text-[2.5rem] font-normal font-montserrat m-auto my-6 ">
        Join the Conversation!
      </h2>

      {submissionStatus === "success" && (
        <>
          {showConfetti && (
            <Confetti 
              colors={[
                "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5",
                "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50",
                "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800",
                "#FF5722", "#795548", "#FFD700", "#FF1493", "#00FA9A"
              ]} 
              numberOfPieces={600} 
              width={width} 
              height={height} 
              recycle={false}
              tweenDuration={8000}
          />
          ) }
          <div className="text-green-600 text-center mb-4">
            YAY ! Thank you for your message!
          </div>
        </>
      )}
      {submissionStatus === "error" && (
        <div className="text-red-600 text-center mb-4">
          Failed to submit the form. Please try again.
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[350px] m-auto"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isLoading ? <BeatLoader /> : <Button type="submit">Submit</Button>}
        </form>
      </Form>
    </div>
  );
};

export default Contact;
