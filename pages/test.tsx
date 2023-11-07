"use client";

import { useEffect, useState } from "react";

const api = "/api/blog";

async function getData() {
  const res = await fetch(api);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Test = () => {
  const [profileData, setProfileData] = useState([]);
  async function initDate() {
    const response = await getData();
    setProfileData(response);
  }

  useEffect(() => {
    initDate();
  }, []);

  return (
    <>
      <h1>My blog</h1>
      {profileData?.map((p: { firstName: string; id: number }) => (
        <p key={p.id}>{p.firstName}</p>
      ))}
    </>
  );
};

export default Test;
