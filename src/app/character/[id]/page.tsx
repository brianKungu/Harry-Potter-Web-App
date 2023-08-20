import Button from "@/app/components/Button";
import Image from "next/image";
import { Characters } from "../../../../interface/data.t";

interface Params {
  params: {
    id: string;
  };
}

async function getCharacter(id: string) {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  if (!res.ok) throw new Error("Failed to fetch character");
  return res.json();
}
export default async function CharacterPage({ params: { id } }: Params) {
  const character: Characters[] = await getCharacter(id);

  return (
    <section>
      <Button />

      {character.map((chr) => (
        <div
          className="grid grid-cols-1 gap-10 mt-4 md:grid-cols-2"
          key={chr.id}
        >
          <Image
            src={chr.image}
            width={1000}
            height={1000}
            className="object-center border rounded-md shadow-lg border-neutral-500/50 shadow-neutral-800/50 h-[500px] width-[500px] dark:border-neutral-800/80"
            alt={`${chr.name} Image`}
            priority
            quality={100}
          />

          <div>
            <div className="grid grid-cols-2 gap-6">
              <p>
                <strong>Name:</strong>
                {chr?.name || "empty"}
              </p>
              <p>
                <strong>Species:</strong> {chr?.species || "empty"}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <p>
                <strong>Gender:</strong> {chr?.gender || "empty"}
              </p>
              <p>
                <strong>Role name:</strong> {chr.actor || "empty"}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <p>
                <strong>House:</strong> {chr?.house || "empty"}
              </p>
              <div>
                <strong>Wand:</strong>
                <ol className="ml-2 list-inside">
                  <li>
                    <strong>Wood {"->"} </strong>
                    {chr?.wand?.wood || "empty"}
                  </li>
                  <li>
                    <strong>Core {"->"} </strong>
                    {chr?.wand?.core || "empty"}
                  </li>
                  <li>
                    <strong>Length {"->"} </strong>
                    {chr?.wand?.length || "empty"}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
