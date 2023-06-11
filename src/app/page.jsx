import Image from "next/image";

const fetchGames = async () => {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.RAWG}`
    );
    await new Promise((resolve) => setTimeout(resolve, 4000));

    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log("Erro: " + err);
  }
};

export default async function App() {
  const games = await fetchGames();
  return (
    <main className=" m-10 rounded-md grid grid-cols-4 gap-10">
      {games.map((game) => {
        return (
          <div
            className="bg-white pt-4 px-4 rounded-md col-span-4 md:col-span-2 lg:col-span-1"
            key={game.id}
          >
            <div className=" aspect-video relative">
              <Image
                src={game.background_image}
                fill
                className=" object-cover rounded-md"
                alt={game.name}
              />
            </div>
            <div className=" flex justify-between items-center my-4">
              <h1>{game.name}</h1>
              <p className=" font-bold">{game.rating}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
