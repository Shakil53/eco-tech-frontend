"use client";

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden w-full bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="SkillersZone"
              width={30}
              height={24}
              className="sm:w-[30px]"
            />
            <p className="text-[30px] font-serif font-bold text-[#9F43EE]">
              CRS
            </p>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/login"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900"
            >
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Button className=" font-semibold hover:!text-black !text-black text-sm sm:text-base shadow-2xl py-5 px-5 !border-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Login
                </Button>
              </motion.div>
            </Link>
            <Link href="/user-info" className="">
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Button className="text-white font-semibold rounded-full !bg-purple-600 hover:!text-white text-sm sm:text-base shadow-2xl py-5 px-8 !border-none">
                  Sign up
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-blue-400 to-purple-500"
      >
        <div className="md:flex items-center justify-center container mx-auto text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white space-y-4 sm:space-y-6 px-4 sm:px-0 text-center sm:text-left"
          >
            <h1 className="text-3xl sm:text-xl max-w-sm md:text-5xl font-extrabold leading-10 sm:w-10/12 mx-auto sm:mx-0">
              Has Your Credit Taken a Hit?
            </h1>
            <p className="text-sm sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:mx-0">
              Stop feeling like you're in a credit rut now. Take your credit
              into your own hands today, so you can have a fresh start tomorrow.
            </p>
            <div className="flex justify-center sm:justify-start sm:items-center">
              <Link href="/signup">
                <Button
                  size="large"
                  className="!text-white !border-0 !rounded-full !bg-blue-500 hover:!bg-purple-500 h-12 sm:h-14 px-10 sm:px-12 text-lg sm:text-xl font-semibold shadow-[0px_25px_50px_rgba(162,64,236,0.5)] transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-[0px_35px_70px_rgba(162,64,236,0.7)]"
                >
                  Get Started Here
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative mt-8 lg:mt-0"
          >
            <Image
              src="/assets/images/man-looking-phone-no-widgets-1.webp"
              alt="Credit Score Dashboard"
              width={600}
              height={400}
              className="rounded-lg sha"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-20 px-4"
      >
        <div className="container mx-auto space-y-12 sm:space-y-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            className="grid lg:grid-cols-2 mx-auto gap-8 sm:gap-12 items-center"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Your Future Is Waiting For You
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Feel relief today when almost every aspect of your life, for
                your future self is fixed and start improving your financial
                health today.
              </p>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <Image
                src="/assets/images/credit.jpg"
                alt="Credit Score Graph"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="relative mt-6 lg:mt-0">
                <Image
                  src="/assets/images/credit.jpg"
                  alt="Credit Score Graph"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Disputing Made Easy
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                We make it easy to dispute those negative items on your credit
                report. Our revolutionary disputing tool is so easy, anyone can
                easily navigate the process, don't be afraid to dispute –
                disputing fixes mistakes and will save!
              </p>
              <Button type="primary" size="large" className="bg-purple-600">
                Start a Dispute
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
        className="py-12 sm:py-20 px-4 bg-gray-50"
      >
        <div className="container mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Get Started For $39.99/mo.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We give you access to your credit score and help you on your journey
            to a better credit score. Sign up today to get started.
          </p>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                3-Bureau Credit Scores & Reports
              </h3>
              <Image
                src="/assets/images/credit.jpg"
                alt="Credit Reports"
                width={200}
                height={200}
                className="mx-auto"
              />
            </motion.div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                AI-Driven Interactive Credit Analysis
              </h3>
              <Image
                src="/assets/images/CSIQ.png"
                alt="Credit Analysis"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Unlimited Dispute Generation
              </h3>
              <Image
                src="/assets/images/credit.jpg"
                alt="Dispute Generation"
                width={200}
                height={200}
                className="mx-auto"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Button type="primary" size="large" className="bg-purple-600 mt-8">
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-12 sm:py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white"
      >
        <div className="container mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Take Control of Your Credit
          </h2>
          <p className="text-base sm:text-xl opacity-90">
            Achieve your credit score goals by taking the first step today.
            Start your path to credit success now.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Button
              size="large"
              className="bg-white text-purple-600 h-10 sm:h-12 px-6 sm:px-8 font-semibold"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex">
              <Link
                href="/"
                className="flex items-center justify-center mx-auto gap-2"
              >
                <Image
                  src="/assets/images/logo.png"
                  alt="SkillersZone"
                  width={30}
                  height={24}
                  className="sm:w-[10px] md:w-[30px]"
                />
                <p className="text-[30px] font-serif font-bold text-[#9F43EE]">
                  CRS
                </p>
              </Link>
            </div>

            <div className="text-xs sm:text-sm text-gray-500 space-y-2">
              <p>Terms of Service | Privacy Policy</p>
              <p>Not associated with any credit bureau</p>
              <p>
                © {new Date().getFullYear()} CreditScoreIQ. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
