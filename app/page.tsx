"use client";
import { useGetReverseQuery } from "./_lib/store/geoCodingApi";
import { useGetVisualCrossingWebServicesRestServicesTimelineByLocationQuery } from "./_lib/store/weatherApi";

type weather = {
  currentConditions: {
    temp: number;
  };
};

export default function Home() {
  const { data: wData } =
    useGetVisualCrossingWebServicesRestServicesTimelineByLocationQuery({
      location: "35.751943, 51.546033",
      key: "J45TVQWNGNQCWYYZJGKLVTCXW",
    });

  const { data: mData } = useGetReverseQuery({
    "x-api-key":
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAzODgxNmUwOTgwNTE1ZDc2NDJjMjcyZDllYjk1ZWUwMTVkMWZlZjZhNDRkNGJkMzgzNGE4ZTA5YmJhMWY5ZGQzMGUxZmZlN2Q4ZDUzZWZkIn0.eyJhdWQiOiIyMTc3NiIsImp0aSI6IjAzODgxNmUwOTgwNTE1ZDc2NDJjMjcyZDllYjk1ZWUwMTVkMWZlZjZhNDRkNGJkMzgzNGE4ZTA5YmJhMWY5ZGQzMGUxZmZlN2Q4ZDUzZWZkIiwiaWF0IjoxNjgwOTUyNjI1LCJuYmYiOjE2ODA5NTI2MjUsImV4cCI6MTY4MzU0NDYyNSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.aCcyNFYaYDaOR0P1Q7hkSmdM8rs_5nx4wBUKJUgX07Q23nl1B_gPU40jNtsDTKI5l1J3QYBnkOmMVHLsfQ_WCen9vqEfBWHMGOvVP-K46vZY4GKkhkYxN8TW2pAXACUetGp-_i4GrU_YGvEdWxOmh92Xcyia59y-EtCVSG_2WI4HtCPIBxSuQj8eLSQCiHssbFPCZMe10XiRNe3R_npbOv3teHRSxMVXb2FKduWmfUjRcuRToOPc7TOxyfHIGKxDKS44jwejGyiNSglbnm2Luh5x_P03j48qqQEyptQ23eaHVUcyZMnhtZKl1OxDNeJfATvvNj6vGBB0wUe1dgx36A",
    lat: 35.751943,
    lon: 51.546033,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-[5rem]">
        {wData
          ? (
              ((wData as weather).currentConditions.temp - 32) /
              1.8
            ).toLocaleString("fa")
          : ""}
      </p>
      <p className="text-[1rem]">{mData?.address_compact}</p>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-[20rem] font-black">هوا</h1>
      </div>
    </main>
  );
}
