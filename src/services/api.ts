async function getVacancys(role: string) {
  const response = await fetch(
    `https://cors-everywhere.onrender.com/https://portal.api.gupy.io/api/v1/jobs?&limit=3000&jobName=${role}&isRemoteWork=true&type=vacancy_type_effective`,
    {
      cache: "no-store",
      headers: {
        Origin: "http://localhost:3000",
        Referer: "http://localhost:3000",
      },
    }
  );
  const data = await response.json();

  if (response.ok) {
    return await data;
  }

  return null;
}

export const api = {
  getVacancys,
};
