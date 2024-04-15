import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class CountryArgs {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  emoji!: string;

  @Field()
  continentCode!: string;
}
