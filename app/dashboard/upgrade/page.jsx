import React from "react";

const page = () => {
  return (
    <div className="">
      <h2 className="font-bold text-3xl text-center mt-5">Upgrade</h2>
      <h2 className="text-center  text-gray-500">Upgrade to monthly plan to access unlimited mock interview</h2>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Free<span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  0${" "}
                </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">✔️ Create 3 Free Mock Interview</h2>
              </li>
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">✔️ Unlimited Retake Interview</h2>
              </li>
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">❌ Practice Question</h2>
              </li>
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">
                  ❌ Tubeguruji.Com Exlcusive App Access
                </h2>
              </li>
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">❌ Email Support</h2>
              </li>
            </ul>
            <a
              href="undefined?prefilled_email=bhupeshpanigrahi574@gmail.com"
              target="_blank"
              className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get Started
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Monthly<span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  7.99${" "}
                </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">✔️ Create 3 Free Mock Interview</h2>
              </li>
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">✔️ Unlimited Retake Interview</h2>
              </li>
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">✔️ Practice Question</h2>
              </li>
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">
                  ✔️ Tubeguruji.Com Exlcusive App Access
                </h2>
              </li>
              <li className="flex items-center gap-1 mb-2">
                <h2 className="text-gray-700">✔️ Email Support</h2>
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/test_28o9EjbkvgfQ8VOeUV?prefilled_email=bhupeshpanigrahi574@gmail.com"
              target="_blank"
              className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
