"use client";

import { useQuery } from "react-query";
import { useStore } from "@/lib/utils";
import { api } from "@/services/api";
import { VacancyProps } from "@/types";
import { Spinner } from "./spinner";
import { ErrorPage } from "./error-page";
import { VacancyItem } from "./vacancy-item";

export function Vacancys() {
  const { input, role } = useStore();

  const {
    data: fetchData,
    isLoading,
    isError,
  } = useQuery(["vacancys", role], async () => api.getVacancys(role));

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorPage />;

  const vacancys: VacancyProps[] = fetchData.data;

  return (
    <div className="my-8 w-full grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {vacancys &&
        vacancys
          .filter((vacancy) =>
            vacancy.name.toLocaleLowerCase().includes(input.toLowerCase())
          )
          .map((vacancy) => (
            <VacancyItem
              key={vacancy.id}
              companyLogo={vacancy.careerPageLogo}
              companyName={vacancy.careerPageName}
              vacancyName={vacancy.name}
              isRemoteWork={vacancy.isRemoteWork}
              vacancyCountry={vacancy.country}
              publishedDate={vacancy.publishedDate}
              vacancyJobUrl={vacancy.jobUrl}
            />
          ))}
    </div>
  );
}
