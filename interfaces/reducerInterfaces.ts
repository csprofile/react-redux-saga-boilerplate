
import { IBoilerplate } from "./boilerplateInterfaces";

export interface IStore {
  readonly boilerplate: IBoilerplate;
}

export interface IBoilerplateAction{
  type: string,
  payload: IBoilerplate
}