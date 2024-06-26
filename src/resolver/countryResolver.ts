// src/resolvers/CountryResolver.ts
import { Resolver, Mutation, Arg, Query, Args } from "type-graphql";
import { Country } from "../entities/country";
import { CountryArgs } from "../entities/country.args";

@Resolver()
export class CountryResolver {
  @Mutation(() => Country)
  async saveNewCountry(
    @Args() { code, name, emoji, continentCode }: CountryArgs
  ): Promise<Country> {
    return Country.saveNewCountry({ code, name, emoji, continentCode });
  }

  @Query(() => [Country])
  async findAllCountries(): Promise<Country[]> {
    return Country.findAllCountries();
  }

  @Query(() => Country, { nullable: true })
  async findCountryByCode(
    @Arg("code") code: string
  ): Promise<Country | string> {
    return Country.findCountryByCode(code);
  }

  @Query(() => [Country])
  async findCountriesByContinent(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    return Country.findCountriesByContinent(continentCode);
  }

  @Mutation(() => String)
  async deleteCountry(@Arg("code") code: string): Promise<string> {
    return Country.deleteCountry(code);
  }
}
