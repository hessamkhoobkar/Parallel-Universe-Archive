import React from "react";

export default function PageHero({
  srOnly,
  title,
  description,
}: {
  srOnly: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-fill xl:w-2/3 flex flex-col justify-start items-start gap-6 mb-12">
      <h1 className="sr-only">{srOnly}</h1>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
