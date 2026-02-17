"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Twobuttons from "@/components/Twobuttons";
import RouteScrollReset from "@/components/RouteScrollReset";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Loader />}
      {!loading && children}
      <RouteScrollReset />
      <Twobuttons />
    </>
  );
}
