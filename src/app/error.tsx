"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 my-auto">
      <h2 className="text-xl font-bold text-red-500/80">
        Something went wrong!
      </h2>
      <p>{error.message}</p>
      <button
        className="p-2 font-medium text-white bg-black rounded-md dark:text-black dark:bg-white text-md hover:bg-black/50 dark:hover:bg-white/80 focus:outline-none"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </section>
  );
}
