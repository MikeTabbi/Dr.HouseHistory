import Image, { type StaticImageData } from "next/image";

export type DivisionCardProps = {
  image: StaticImageData;
  alt: string;
};

export function DivisionCard({ image, alt }: DivisionCardProps) {
  return (
    <article className="flex flex-col items-center justify-center rounded-lg bg-white px-6 py-10 shadow-sm ring-1 ring-black/5 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:ring-black/10">
      <div className="relative flex h-44 w-full items-center justify-center sm:h-52">
        <Image
          src={image}
          alt={alt}
          className="max-h-full w-auto max-w-full object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </article>
  );
}
