import React from "react";

export const CandidateProfile = () => {
  const name = "Rael Achieng'";
  const role = "Web developer";
  const yearsOfExperience = 3;
  const isAvailable = true;

  return (
    <>
      <h2>{name}</h2>
      <p>
        {role} with {yearsOfExperience} years of experience.
      </p>
      <p>Started in {2026 - yearsOfExperience}</p>
      <p>Status: {isAvailable ? "Available for hire" : "Not available for hire"}</p>
      <p>Contact: {name.toLowerCase().replace(" ", ".")}@email.com</p>
    </>
  );
};
