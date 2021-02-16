import { useState } from "react";
import Nav from "../components/Nav";
import AgeDisplay from "../components/AgeDisplay";

export interface Gender {
  gender: "string";
  probability: number;
}

interface Country {
  country_id: string;
  probability: number;
}

export interface Countries {
  name: string;
  country: Country[];
}

export default function adify() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [countries, setCountries] = useState<Countries>();
  const [gender, setGender] = useState<Gender>();
  const [show, setShow] = useState<boolean>(false);

  async function ageHandler() {
    const [ageRes, genRes, natRes] = await Promise.all([
      fetch(`https://api.agify.io?name=${name}`).then(res => res.json()),
      fetch(`https://api.genderize.io?name=${name}`).then(res => res.json()),
      fetch(`https://api.nationalize.io?name=${name}`).then(res => res.json())
    ]);

    if (ageRes && genRes && natRes) {
      setAge(ageRes.age);
      setCountries(natRes);
      setGender(genRes);
      setShow(true);
    }
  }

  const content = show ? (
    <AgeDisplay name={name} age={age} gender={gender} countries={countries} />
  ) : null;

  return (
    <>
      <Nav />

      <label htmlFor="name">Simply enter your name:</label>
      <input
        type="text"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
          setName(event.target.value)
        }
      />
      <button type="submit" onClick={() => ageHandler()}>
        Submit
      </button>

      <h1>{`Name: ${name}`}</h1>
      {content}
    </>
  );
}
