import React from "react";
import CountryDetails from "../../components/CountryDetails";

import api from "../../services/api";

import { Border, BordersList, Container, Countries, Header } from "./styles";

interface CountryResponse {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  area: Number;
  alpha3Code: string;
  flag: string;
  borders: [];
}

const Main: React.FC = () => {
  const [countries, setCountries] = React.useState<CountryResponse[]>([]);

  React.useEffect(() => {
    api
      .get(
        "all?fields=name;capital;region;subregion;area;borders;alpha3Code;flag"
      )
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return (
    <Container>
      <Countries>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Header>
              <img src={country.flag} alt={country.name} title={country.name} />
            </Header>
            <hr />
            <CountryDetails title="Country" text={country.name} />
            <CountryDetails title="Alpha Code" text={country.alpha3Code} />
            <CountryDetails title="Capital" text={country.capital} />
            <CountryDetails title="Region" text={country.region} />
            <CountryDetails title="Subregion" text={country.subregion} />
            <CountryDetails title="Area" text={`${country.area} m²`} />
            <span>Borders:</span>
            <BordersList>
              {country.borders.map((border) => (
                <Border key={border}>
                  <p>{border}</p>
                </Border>
              ))}
            </BordersList>
          </li>
        ))}
      </Countries>
    </Container>
  );
};

export default Main;
