import { DataSource } from "typeorm";

let dataSource: DataSource;

export const getDataSource = async () => {
  if (!dataSource) {
    dataSource = new DataSource({
      type: "sqlite",
      database: "db.sqlite",
      entities: [],
      synchronize: true,
    });
    await dataSource.initialize();
  }
  return dataSource;
};
