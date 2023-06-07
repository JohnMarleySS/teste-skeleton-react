export default function Loading() {
  return (
    <main className=" m-24 rounded-md grid grid-cols-4 gap-12">
      {Array.from({ length: 20 }, (_, i) => i + 1).map((id) => {
        return (
          <div
            className="bg-white pt-4 px-4 rounded-md col-span-4 md:col-span-2 lg:col-span-1"
            key={id}
          >
            <div className=" aspect-video relative"></div>
            <div className=" flex justify-between items-center my-4">
              <h1></h1>
              <p className=" font-bold"></p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
