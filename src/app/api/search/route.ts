import { NextResponse, NextRequest } from "next/server";

async function getCharacters() {
  const res = await fetch("https://hp-api.onrender.com/api/characters");

  if (!res.ok) throw new Error("Error fetching characters");
  return res.json();
}

export async function GET(req: Request, res: NextResponse) {
  const characters = await getCharacters();
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const fiterCharacters = characters.filter((character:any) => {
    return (
      character.name.toLowerCase().includes(query?.toLowerCase()) ||
      character.house.toLowerCase().includes(query?.toLowerCase())
    );
  });
  //   console.log(characters);

  return NextResponse.json(fiterCharacters);
}
