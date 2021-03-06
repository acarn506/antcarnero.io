import { useState } from "react";
import NameDisplay from "../components/NameDisplay";
import Container from "../components/Container/Container";

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

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const content = show ? (
    <NameDisplay name={name} age={age} gender={gender} countries={countries} />
  ) : null;

  return (
    <Container title="Name Info">
      <div className="mb-5 pt-0 flex flex-row w-3/5">
        <input
          type="text"
          value={name}
          onChange={nameChangeHandler}
          placeholder="Simply enter your name"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-2xl shadow outline-none focus:outline-none focus:shadow-outline w-full"
        />
        <button
          className="mx-3.5 text-black-700 bg-green-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/6 hover:bg-green-500"
          type="submit"
          onClick={name ? () => ageHandler() : null}
        >
          Submit
        </button>
      </div>

      {content}
    </Container>
  );
}
