import { Countries, Gender } from "../pages/nameInfo";
import * as d3 from "d3";

interface Props {
  name: string;
  age: number;
  countries: Countries;
  gender: Gender;
}

export default function AgeDisplay({ name, age, gender, countries }: Props) {
  const colorMScale = d3
    .scaleLinear<string>()
    .domain([0.4, 1])
    .range(["skyblue", "#0b2df1"]);

  const colorFScale = d3
    .scaleLinear<string>()
    .domain([0.4, 1])
    .range(["#f598e7", "#f31fd3"]);

  let male: string = "male";

  let countryList = countries.country.map((country, i) => {
    return (
      <li
        key={i}
        className="py-5 px-8 bg-blue-200 rounded shadow outline-none focus:outline-none focus:shadow-outline"
      >{`${country.country_id} Percent: ${Math.round(
        country.probability * 100
      )}%`}</li>
    );
  });

  let rect = (
    <g>
      <rect
        height={45}
        width={130}
        rx="5"
        fill={
          gender.gender === male
            ? colorMScale(gender.probability)
            : colorFScale(gender.probability)
        }
      ></rect>
      <text x="22" y="28" fontSize="15" fill="white">
        {`Percent: ${Math.round(gender.probability * 100)}%`}
      </text>
    </g>
  );

  return (
    <>
      <div className="flex flex-row space-x-10 mt-10">
        <h1 className="text-xl text-gray-600">{`Name: ${name}`}</h1>
        <h1 className="text-xl text-gray-600">{`Age: ${age}`}</h1>
      </div>
      <div className="my-10 flex flex-col  items-center bg-white rounded shadow outline-none focus:outline-none focus:shadow-outline w-1/6 h-1/5">
        <h3 className="mt-10 mb-3 text-xl text-gray-600">{`Gender: ${gender.gender}`}</h3>
        <svg height="45" width="130">
          {rect}
        </svg>
      </div>
      <h1 className="text-xl text-gray-600">Countries</h1>
      <div className=" list-none flex flex-row my-10 space-x-10 ">
        {countryList}
      </div>
    </>
  );
}
