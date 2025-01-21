"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function LoadingBar() {
  return (
    <ProgressBar
      height="4px"
      color="#2563eb"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}