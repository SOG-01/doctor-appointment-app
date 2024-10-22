"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function ContactUs() {
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
    console.log("Clinic Registration Form submitted:", formData);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="lg:py-24">
        <h2 className="text-4xl font-bold sm:text-4xl">
          Boost Your Clinic's Visibility
        </h2>
        <p className="mt-4 text-gray-500">
          Join our platform and get access to thousands of patients searching
          for trusted healthcare providers just like you. With our easy-to-use
          appointment system and real-time location features, your clinic will
          be more accessible than ever. Let patients find and book your services
          with ease and grow your client base effortlessly.
        </p>
        <Button className="mt-10">Register Your Clinic</Button>
      </div>
      <div className="mx-auto max-w-screen-lg px-6">
        {/* Title and Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Register Your Clinic
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our platform by registering your clinic and gain visibility
            among thousands of patients. Fill out the form below to get started!
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white p-10 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Clinic Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Clinic Name
              </label>
              <input
                type="text"
                name="clinicName"
                value={formData.clinicName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your clinic's name"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your clinic's address"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Website (if available)
              </label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your clinic's website"
              />
            </div>

            {/* Services Offered */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Services Offered
              </label>
              <textarea
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="List the services your clinic offers"
              />
            </div>

            {/* Working Hours */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Working Hours
              </label>
              <input
                type="text"
                name="workingHours"
                value={formData.workingHours}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your clinic's working hours (e.g., 9 AM - 5 PM)"
              />
            </div>
            {/* doctors categories  */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Services You Offer
              </label>
              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent bg-white appearance-none cursor-pointer"
              >
                <option value="">Select a service</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="dentist">Dentist</option>
                <option value="ophthalmology">Ophthalmology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="dermatology">Dermatology</option>
              </select>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Any additional details about your clinic"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Submit Registration
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
