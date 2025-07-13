"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    startDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (
      formData.phone &&
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        childAge: "",
        startDate: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative w-full py-12 sm:py-16 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-testimonial-1)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-3 sm:mb-4">
            <span
              className="text-base sm:text-lg font-semibold px-3 sm:px-4 py-2 rounded-full shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:scale-105"
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-bg-nav)",
              }}
            >
              Get in Touch
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-serif leading-tight px-2 sm:px-0"
            style={{ color: "var(--color-text-primary)" }}
          >
            Ready to Give Your Child the
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span style={{ color: "var(--color-text-primary)" }}>
              Best Care?
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto px-4 sm:px-0"
            style={{ color: "var(--color-text-primary)" }}
          >
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible to discuss how we can support your
            family.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full"
              style={{
                backgroundColor: "var(--color-cta-outline-bg)",
              }}
            >
              <h3
                className="text-xl sm:text-2xl font-bold mb-6 font-serif"
                style={{ color: "var(--color-text-primary)" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-bg-nav)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      style={{ color: "var(--color-text-primary)" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm sm:text-base"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+44201234567"
                      className="text-sm sm:text-base hover:underline transition-colors"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      +44 20 1234 567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-bg-nav)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      style={{ color: "var(--color-text-primary)" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm sm:text-base"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:vshubha.work@gmail.com"
                      className="text-sm sm:text-base hover:underline transition-colors"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      vshubha.work@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-bg-nav)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      style={{ color: "var(--color-text-primary)" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm sm:text-base"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Operating Hours
                    </p>
                    <p
                      className="text-sm sm:text-base"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Monday - Friday: 7:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="pt-4 border-t border-gray-200">
                  <p
                    className="font-semibold text-sm sm:text-base mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Quick Actions
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/"
                      className="block text-sm hover:underline transition-colors"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      ← Back to Home
                    </Link>
                    <Link
                      href="/#programmes"
                      className="block text-sm hover:underline transition-colors"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      View Our Programmes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                backgroundColor: "var(--color-cta-outline-bg)",
                transitionDelay: "200ms",
              }}
            >
              {/* Success Message */}
              {submitStatus === "success" && (
                <div
                  className="mb-6 p-4 rounded-xl border-l-4 border-green-500"
                  style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                >
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <p className="text-green-700 font-semibold">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div
                  className="mb-6 p-4 rounded-xl border-l-4 border-red-500"
                  style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                >
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    <p className="text-red-700 font-semibold">
                      Something went wrong. Please try again or call us
                      directly.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {/* Name Field */}
                <div className="sm:col-span-1 group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 transition-colors duration-200"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Parent's Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } focus:border-blue-400 focus:outline-none transition-all duration-300 ease-out text-sm sm:text-base hover:border-gray-300 focus:shadow-lg focus:scale-[1.02] transform`}
                    style={{ color: "var(--color-text-primary)" }}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="sm:col-span-1 group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 transition-colors duration-200"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } focus:border-blue-400 focus:outline-none transition-all duration-300 ease-out text-sm sm:text-base hover:border-gray-300 focus:shadow-lg focus:scale-[1.02] transform`}
                    style={{ color: "var(--color-text-primary)" }}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="sm:col-span-1 group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2 transition-colors duration-200"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } focus:border-blue-400 focus:outline-none transition-all duration-300 ease-out text-sm sm:text-base hover:border-gray-300 focus:shadow-lg focus:scale-[1.02] transform`}
                    style={{ color: "var(--color-text-primary)" }}
                    placeholder="+44 20 1234 5678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Child Age Field */}
                <div className="sm:col-span-1 group">
                  <label
                    htmlFor="childAge"
                    className="block text-sm font-semibold mb-2 transition-colors duration-200"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Child's Age
                  </label>
                  <select
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 ease-out text-sm sm:text-base hover:border-gray-300 focus:shadow-lg focus:scale-[1.02] transform cursor-pointer"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    <option value="">Select age range</option>
                    <option value="0-6 months">0-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2-3 years">2-3 years</option>
                    <option value="3-4 years">3-4 years</option>
                    <option value="4+ years">4+ years</option>
                  </select>
                </div>

                {/* Start Date Field */}
                <div className="sm:col-span-2 group">
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-semibold mb-2 transition-colors duration-200"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 ease-out text-sm sm:text-base hover:border-gray-300 focus:shadow-lg focus:scale-[1.02] transform"
                    style={{ color: "var(--color-text-primary)" }}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6 sm:mb-8 group">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 transition-colors duration-200"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 ease-out resize-none text-sm sm:text-base hover:border-gray-300 focus:shadow-lg focus:scale-[1.01] transform"
                  style={{ color: "var(--color-text-primary)" }}
                  placeholder="Tell us about your childcare needs, any questions you have, or when you'd like to start..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 ${
                    isSubmitting ? "animate-pulse" : ""
                  }`}
                  style={{
                    backgroundColor: "var(--color-cta-primary-bg)",
                    color: "var(--color-cta-primary-text)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 sm:mt-8 text-center">
                <p
                  className="text-xs sm:text-sm opacity-75 px-2 sm:px-0 leading-relaxed"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  We typically respond within 24 hours. For urgent matters,
                  please call us directly at{" "}
                  <a
                    href="tel:+44201234567"
                    className="font-semibold hover:underline break-words transition-all duration-200 ease-out hover:opacity-80 hover:scale-105 transform inline-block"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    +44 20 1234 567
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
