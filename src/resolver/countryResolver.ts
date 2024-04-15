// src/resolvers/CountryResolver.ts
import { Resolver, Mutation, Arg, Query, Args } from "type-graphql";
import { Country } from "../entities/country";
import { CountryArgs } from "../entities/country.args";

@Resolver()
export class CountryResolver {
  @Mutation(() => Country)
  async saveNewCountry(
    @Args() { code, name, emoji }: CountryArgs
  ): Promise<Country> {
    return Country.saveNewCountry({ code, name, emoji });
  }

  @Query(() => [Country])
  async findAllCountries(): Promise<Country[]> {
    return Country.findAllCountries();
  }
}
