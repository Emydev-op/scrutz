export default function Settings() {
  return (
    <div className="px-10 py-6 h-full">
      <div className="h-fit">
        <main className="flex justify-between items-center">
          <h3 className="capitalize font-bold text-2xl text-[var(--pry-color)]">
            Account Settings
          </h3>
        </main>
      </div>
      <section className="h-[95%] grid place-content-center">
        <div className="text-center space-y-8">
          <img
            src="/empty.png"
            alt=""
            className="w-[426px] h-[290px] mx-auto"
          />
          <p className="text-sm font-semibold">
            No activity yet. 
          </p>
        </div>
      </section>
    </div>
  );
}
