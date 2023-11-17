"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import { useStore } from "@/lib/utils";
import { api } from "@/services/api";
import { Spinner } from "./spinner";
import { ErrorPage } from "./error-page";
import { VacancyItem } from "./vacancy-item";
import { VacancyProps } from "@/types";
import { Button } from "./button";

export function Vacancies() {
  const { input, role } = useStore();

  const LIMIT = 10;

  const [page, setPage] = useState(1);
  const [offSet, setOffSet] = useState(LIMIT);

  const {
    data: fetchData,
    isLoading,
    isError,
  } = useQuery(["vacancies", role, offSet], async () =>
    api.getVacancies(role, offSet)
  );

  const TOTAL_VACANCIES = fetchData?.pagination.total;

  const TOTAL_PAGES = Math.floor(TOTAL_VACANCIES / LIMIT);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorPage />;

  const vacancies: VacancyProps[] = fetchData.data;

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
      setOffSet(offSet - LIMIT);
    } else {
      return;
    }
  }

  function handleNextPage() {
    if (page >= TOTAL_PAGES) {
      return;
    } else {
      setPage(page + 1);
      setOffSet(offSet + LIMIT);
    }
  }

  return (
    <>
      <div className="my-8 w-full grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {vacancies &&
          vacancies
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

      <div className="w-full flex items-center justify-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          &lt;
        </Button>
        <Button size="icon" variant="outline">
          {page}
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={handleNextPage}
          disabled={page === TOTAL_PAGES}
        >
          &gt;
        </Button>
      </div>
    </>
  );
}
