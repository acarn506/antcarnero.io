import { useState } from "react";
import Nav from "../components/Nav";

export default function adify() {
  const [name, setName] = useState<string>("");

  const ageHandler = async event => {
    console.log(name);
  };

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
      <button type="submit" onClick={() => ageHandler(name)}>
        Submit
      </button>

      <h1>{`Name: ${name}`}</h1>
    </>
  );
}
