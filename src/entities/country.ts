// src/entity/Country.ts
import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";

type CountryData = {
  code: string;
  name: string;
  emoji: string;
  continentCode: string;
};

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryColumn()
  code!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  emoji!: string;

  @Field()
  @Column()
  continentCode!: string;

  static async saveNewCountry(countryData: CountryData): Promise<Country> {
    const newCountry = new Country();
    newCountry.code = countryData.code;
    newCountry.name = countryData.name;
    newCountry.emoji = countryData.emoji;
    newCountry.continentCode = countryData.continentCode;

    await Country.save(newCountry);
    return newCountry;
  }

  static async findAllCountries(): Promise<Country[]> {
    return Country.find();
  }

  static async findCountryByCode(code: string): Promise<Country | string> {
    const country = await Country.findOne({ where: { code } });
    return country || "Country not found";
  }

  static async findCountriesByContinent(
    continentCode: string
  ): Promise<Country[]> {
    return Country.find({ where: { continentCode } });
  }

  static async deleteCountry(code: string): Promise<string> {
    const country = await Country.findOne({ where: { code } });
    if (country) {
      await Country.remove(country);
      return "Country deleted";
    }
    return "Country not found";
  }
}
