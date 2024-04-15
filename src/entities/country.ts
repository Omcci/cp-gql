// src/entity/Country.ts
import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";

type CountryData = {
  code: string;
  name: string;
  emoji: string;
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

  static async saveNewCountry(countryData: CountryData): Promise<Country> {
    const newCountry = new Country();
    newCountry.code = countryData.code;
    newCountry.name = countryData.name;
    newCountry.emoji = countryData.emoji;

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
}
