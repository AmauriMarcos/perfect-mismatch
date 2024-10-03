"use client";
import React, { useState, useEffect } from "react";
import { IoIosSearch as IconSearch } from "react-icons/io";
import { usePathname } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";
import LottieAnimationSending from "../LottieAnimation/sendingAnimation";
import { BsFillSendFill } from "react-icons/bs";

const Subscribe = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const pathname = usePathname();

  // Reset error message when email changes
  useEffect(() => {
    if (email.length === 0) {
      setErrorMessage("");
    }
  }, [email, isSubmitted]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (!email) return;

    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    setIsSubmitted(true);

    try {
      const response = await fetch(
        "https://buttondown.com/api/emails/embed-subscribe/perfect-mismatch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email,
            embed: "1",
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage("Thank you!");
        setEmail("");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.detail || "Something went wrong, please try again."
        );
      }
    } catch (error) {
      setErrorMessage(
        "Failed to subscribe. Please check your internet connection."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div
      className={`${
        pathname !== "/" ? "hidden" : "flex"
      } px-[6%] md:px-[12%] 2xl:px-[14%] flex-col items-center justify-center bg-tertiary dark:bg-[#66a5ba] py-[2.5rem] md:py-[4rem] md:mt-10 md:flex-row md:justify-between`}
    >
      <>
        {successMessage ? (
          <div className="mt-4 text-lg md:text-[31px] text-textPrimary uppercase font-montserrat font-thin text-center">
            {successMessage}
          </div>
        ) : isSubmitted && errorMessage ? (
          <p className="text-red-500 dark:text-[#215c55] dark:font-bold font-inter mt-4 text-center">
            {errorMessage}
          </p>
        ) : (
          <div className="flex flex-col gap-0 md:gap-4 text-center md:text-left">
            <span className="text-lg md:text-[31px] text-textPrimary uppercase font-montserrat font-thin">
              Never miss a post!
            </span>
            <span className="text-lg md:text-[31px] text-back text-[#313131] dark:text-[#1a546b] font-montserrat font-thin">
              Subscribe for updates.
            </span>
          </div>
        )}
      </>

      <div className="flex flex-col items-center mt-4 md:mt-0">
        <div className="flex">
          <input
            type="email"
            placeholder="Email"
            className="placeholder:text-slate-300 bg-[#fcfcfc] h-[40px] md:h-[60px] w-[240px] md:w-[430px] px-4 border border-none rounded-l-md focus:outline-none font-inter text-[#313131]"
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeyDown}
          />

          <button
            className="h-[40px] md:h-[60px] w-[44px] md:w-[64px] px-4 bg-tertiaryAccent dark:bg-[#1d2529] dark:hover:bg-[#1D2529]/90 text-white rounded-r-md hover:bg-[#ff7766] transition duration-300 flex items-center justify-center"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <BeatLoader size={8} color="#fff" />
            ) : (
              <BsFillSendFill className="w-4 md:w-6 h-4 md:h-6 fill-current text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
