"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    startDate: "",
    schedule: "full-time",
    message: "",
    submitted: false,
    error: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isVisible = inView;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData((prev) => ({
        ...prev,
        submitted: true,
        error: null,
      }));
    } catch (error) {
      setFormData((prev) => ({
        ...prev,
        error:
          "Failed to submit form. Please try again or contact us directly.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={ref}
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
            back to you within 2-3 hours to discuss how we can support your
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
                      href="tel:+17032328585"
                      className="text-sm sm:text-base hover:underline transition-colors"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      +1 (703) 232-8585
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
                      href="mailto:mav2va@gmail.com"
                      className="text-sm sm:text-base hover:underline transition-colors"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      mav2va@gmail.com
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
                      Ages We Serve
                    </p>
                    <p
                      className="text-sm sm:text-base"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      2 Months - 5 Years
                    </p>
                  </div>
                </div>

                {/* Rest of the component remains the same */}
                {/* ... */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {formData.submitted ? (
              <div
                className="rounded-2xl sm:rounded-3xl p-8 text-center"
                style={{ backgroundColor: "var(--color-bg-nav)" }}
              >
                <h3
                  className="text-2xl font-bold mb-4 font-serif"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Thank You!
                </h3>
                <p
                  className="text-lg"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  We've received your enrollment inquiry and will get back to
                  you within 2-3 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {/* Parent Name */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="parentName"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Parent's Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-nav)",
                      borderColor: "var(--color-bg-nav)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
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
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-nav)",
                      borderColor: "var(--color-bg-nav)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-nav)",
                      borderColor: "var(--color-bg-nav)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Child's Name */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="childName"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-nav)",
                      borderColor: "var(--color-bg-nav)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="Enter child's name"
                  />
                </div>

                {/* Child's Age */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="childAge"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Child's Age *
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-nav)",
                      borderColor: "var(--color-bg-nav)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="e.g., 2 years 3 months"
                  />
                </div>

                {/* Desired Start Date */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Desired Start Date *
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-nav)",
                      borderColor: "var(--color-bg-nav)",
                      color: "var(--color-text-primary)",
                    }}
                  />
                </div>

                {/* Schedule */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="schedule"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Schedule Preference *
                  </label>
                  <select
                    id="schedule"
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-nav)",
                      borderColor: "var(--color-bg-nav)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Message */}
                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-nav)",
                      borderColor: "var(--color-bg-nav)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>

                {/* Error Message */}
                {formData.error && (
                  <div className="col-span-2 text-red-500 text-sm">
                    {formData.error}
                  </div>
                )}

                {/* Submit Button */}
                <div className="col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--color-cta-primary-bg)",
                      color: "var(--color-cta-primary-text)",
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Submit Enrollment Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Response Time Message */}
          <div className="mt-6 sm:mt-8 text-center">
            <p
              className="text-xs sm:text-sm opacity-75 px-2 sm:px-0 leading-relaxed"
              style={{ color: "var(--color-text-primary)" }}
            >
              We typically respond within 2-3 hours. For urgent matters, please
              call us directly at{" "}
              <a
                href="tel:+17032328585"
                className="font-semibold hover:underline break-words transition-all duration-200 ease-out hover:opacity-80 hover:scale-105 transform inline-block"
                style={{ color: "var(--color-text-primary)" }}
              >
                +1 (703) 232-8585
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
