import { NextResponse } from "next/server";

async function getCharacters() {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function GET(req:Request){
    const characters = await getCharacters()
    return NextResponse.json(characters)
}