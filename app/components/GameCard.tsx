"use client";

export default function GameCard({
  name,
  cover_image,
  modalCall,
}: {
  name: string;
  cover_image: string;
  modalCall: () => void;
}) {
  function handleClick() {
    modalCall();
  }

  return (
    <div
      onClick={handleClick}
      className="col-span-1 row-span-1 card rounded-lg relative overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-4 flex justify-center items-center text-center">
        <span className="text-slate-300 text-sm">{name}</span>
      </div>

      <div
        className="w-full rounded-lg aspect-w-6 aspect-h-9 bg-cover bg-center"
        style={{ backgroundImage: `url(${cover_image})` }}
      ></div>
    </div>
  );
}
