"use client";

import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <main className=" m-24 rounded-md grid grid-cols-4 gap-12">
      {Array.from({ length: 20 }, (_, i) => i + 1).map((id) => {
        return (
          <div
            className="bg-[#515151] pt-4 px-4 rounded-md col-span-4 md:col-span-2 lg:col-span-1"
            key={id}
          >
            <div className=" aspect-video relative rounded">
              <Skeleton
                sx={{
                  height: "100%",
                  borderRadius: "5px",
                  bgcolor: "grey.900",
                }}
                variant="rectangular"
              />
            </div>
            <div className=" flex justify-between items-center my-4">
              <Skeleton height={40} width="80%" sx={{ bgcolor: "grey.900" }} />
              <Skeleton height={40} width="10%" sx={{ bgcolor: "grey.900" }} />
            </div>
          </div>
        );
      })}
    </main>
  );
}
