"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <Link href="/">
      <Button type="reset" onClick={reset} className="search-btn text-white">
        <X className="size-5" />
      </Button>
    </Link>
  );
};

export default SearchFormReset;
