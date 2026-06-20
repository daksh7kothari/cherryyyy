import type { GalleryRow } from "@/data/gallery";

type PhotoMosaicProps = {
  rows: GalleryRow[];
};

function MosaicRow({ columns }: GalleryRow) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      {columns.map((flexValue, index) => (
        <div
          key={`${flexValue}-${index}`}
          className="min-h-[180px] rounded-sm bg-[#232323] sm:min-h-[240px] lg:min-h-[308px]"
          style={{ flex: flexValue }}
        />
      ))}
    </div>
  );
}

export function PhotoMosaic({ rows }: PhotoMosaicProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {rows.map((row, index) => (
        <MosaicRow key={`row-${index}`} columns={row.columns} />
      ))}
    </div>
  );
}
