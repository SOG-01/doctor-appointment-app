"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

function ContactUs() {
  const { user } = useKindeBrowserClient();
  const [formData, setFormData] = useState({
    clinicName: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    services: "",
    workingHours: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log("Clinic Registration Form submitted:", formData);
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src="/doctors.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full rounded-3xl w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-4xl font-bold sm:text-4xl">
              Boost Your Clinic's Visibility
            </h2>
            <p className="mt-4 text-gray-500">
              Join our platform and get access to thousands of patients
              searching for trusted healthcare providers just like you. With our
              easy-to-use appointment system and real-time location features,
              your clinic will be more accessible than ever. Let patients find
              and book your services with ease and grow your client base
              effortlessly.
            </p>
            <Button className="mt-10">Register Your Clinic</Button>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <Image
              alt=""
              src="/map.svg"
              width={800}
              height={800}
              className="absolute inset-0 h-full rounded-3xl w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-4xl font-bold sm:text-4xl">
              <span className="text-primary">Easily Reach More Patients</span>
            </h2>
            <p className="mt-4 text-gray-500">
              By creating a digital presence on our platform, your clinic can
              become the go-to healthcare provider for patients in your area.
              With our integrated map feature and real-time booking system,
              patients can locate your clinic and schedule appointments
              seamlessly. It's time to take your clinic digital and tap into the
              benefits of modern healthcare technology.
            </p>
            <Button className="mt-10">
              {user ? (
                <Link href={"./explore"}>Try the Map Feature</Link>
              ) : (
                <LoginLink>
                  {" "}
                  <Button>Get Started</Button>
                </LoginLink>
              )}
            </Button>
          </div>
        </div>

        {/* Clinic Registration Form */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold">Register Your Clinic</h2>
          <p className="mt-4 text-gray-500">
            Fill in the details below to register your clinic on our platform.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Clinic Name
              </label>
              <input
                type="text"
                name="clinicName"
                value={formData.clinicName}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website (if available)
              </label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Services Offered
              </label>
              <textarea
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Working Hours
              </label>
              <input
                type="text"
                name="workingHours"
                value={formData.workingHours}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <Button className="mt-6" type="submit">
              Submit Registration
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
