import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Listing | null;
  roles: JsonValue;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
};
