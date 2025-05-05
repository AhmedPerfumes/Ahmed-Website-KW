"use client";
import React, { useState } from "react";
// import StoreMap from "./StoreMap";
// import { storesLocations } from "@/data/storeLocations";
import Script from "next/script";

export default function StoreLocator() {
  return (
    <>
      <Script
        src="https://cdnsl.brandwizard.io/dist/widget.min.js"
        strategy="afterInteractive"
      />
      <div data-rd-locator="d951028d-c792-40b3-b977-c0529ff11eaa"></div>
    </>
  );
}
