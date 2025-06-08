export default function Loading() {
  return (
    <>
      <div className="flex flex-col bg-neutral-300  w-full max-w-md md:max-w-lg lg:w-[40%] h-auto min-h-[400px] animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
    </>
  );
}
