export type VacancyProps = {
  id: number;
  name: string;
  careerPageName: string;
  careerPageLogo: string;
  isRemoteWork: boolean;
  country: string;
  jobUrl: string;
  publishedDate: string;
};

export type VacancyItemProps = {
  companyLogo: string;
  companyName: string;
  vacancyName: string;
  isRemoteWork: boolean;
  vacancyCountry: string;
  publishedDate: string;
  vacancyJobUrl: string;
};
