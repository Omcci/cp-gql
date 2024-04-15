import { DataSource } from "typeorm";
import { Country } from "./entities/country";

let dataSource: DataSource;

export const getDataSource = async () => {
  if (!dataSource) {
    try {
      dataSource = new DataSource({
        type: "sqlite",
        database: "db.sqlite",
        entities: [Country],
        synchronize: true,
      });
      await dataSource.initialize();
    } catch (error) {
      console.error("Error during DataSource initialization:", error);
      throw error;
    }
  }
  return dataSource;
};
