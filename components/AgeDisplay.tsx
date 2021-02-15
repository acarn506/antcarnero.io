import { Countries, Gender } from "../pages/agify";

interface Props {
  name: string;
  age: number;
  countries: Countries;
  gender: Gender;
}

export default function AgeDisplay({ name, age, gender, countries }: Props) {
  const countryList = countries.country.map((country, i) => {
    return <li key={i}>{country.country_id}</li>;
  });

  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{gender.gender}</h3>
      {countryList}
    </>
  );
}
