import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CharacterDetails {
  link: string;
  name: string;
  dateOfBirth: string;
  imageSrc: string;
}

export default function ActorCard({
  link,
  name,
  dateOfBirth,
  imageSrc,
}: CharacterDetails) {
  return (
    <>
      <div className="transition duration-300 delay-100 border rounded-md shadow-md dark:bg-neutral-800/80 border-neutral-500/50 dark:border-neutral-800/80 hover:-translate-y-1 ease-soft-spring">
        <Link href={link} passHref>
          <Image
            src={imageSrc}
            width={500}
            height={500}
            className={
              imageSrc ? "h-64 rounded-t-md" : "bg-white dark:bg-neutral-800/80"
            }
            alt={imageSrc ? "character image" : "character has no image"}
            priority
            quality={100}
          />
          <div className="flex items-center justify-between p-2">
            <p>{name}</p>
            <p>{dateOfBirth || "no date of birth"}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
