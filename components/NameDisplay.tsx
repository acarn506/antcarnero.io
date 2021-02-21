import { Countries, Gender } from "../pages/nameInfo";

interface Props {
  name: string;
  age: number;
  countries: Countries;
  gender: Gender;
}

export default function AgeDisplay({ name, age, gender, countries }: Props) {
  const countryList = countries.country.map((country, i) => {
    return (
      <li key={i}>{`Country: ${country.country_id} Percent: ${Math.round(
        country.probability * 100
      )}%`}</li>
    );
  });

  return (
    <>
      <h1>{`Name: ${name}`}</h1>
      <h2>{`Age: ${age}`}</h2>
      <h3>{`Gender: ${gender.gender} Percent: ${Math.round(
        gender.probability * 100
      )}%`}</h3>
      {countryList}
    </>
  );
}
