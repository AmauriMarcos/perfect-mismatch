"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import ConfettiComponent from "../Confetti/Confetti";

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

  const handleConfettiComplete = () => {
    setShowConfetti(false); // Stop showing confetti after animation completes
  };

  return (
    <div className="overflow-x-hidden mt-5 md:mt-[50px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col mb-[5rem]">
      <h2 className="text-[1.5rem] md:text-[2.5rem] font-normal font-montserrat m-auto my-6 ">
        Join the Conversation!
      </h2>

      {submissionStatus === "success" && (
        <>
          {showConfetti && (
            <ConfettiComponent
              numberOfPieces={600}
              tweenDuration={8000}
              onConfettiComplete={handleConfettiComplete}
            />
          )}
          <div className="text-green-600 dark:text-[#5ed4c6] text-center mb-4">
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

          {isLoading ? <BeatLoader color="#444444" /> : <Button type="submit">Submit</Button>}
        </form>
      </Form>
    </div>
  );
};

export default Contact;
