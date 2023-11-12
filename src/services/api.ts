async function getVacancys(role: string) {
  const query = {
    limit: '20',
    jobName: role,
    isRemoteWork: 'true',
    type: 'vacancy_type_effective',
  };

  if (
    !process.env.NEXT_PUBLIC_GUPY_ENDPOINT
    || !process.env.NEXT_PUBLIC_CORS_BP
  ) {
    throw new Error('Environment variables are not set');
  }

  const endpoint = process.env.NEXT_PUBLIC_GUPY_ENDPOINT;
  const cors = process.env.NEXT_PUBLIC_CORS_BP;

  const finalEndpoint = `${cors}${endpoint}?${new URLSearchParams(query)}`;

  const response = await fetch(
    finalEndpoint,
    {
      cache: "force-cache",
      headers: {
        Origin: "http://localhost:3000",
        Referer: "http://localhost:3000",
      },
      next: {
        revalidate: 3600
      },
    },
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
