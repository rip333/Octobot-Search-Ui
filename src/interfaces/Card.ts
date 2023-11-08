export interface Card {
  Deleted: boolean;
  Id: string;
  Official: boolean;
  AuthorId?: string;
  Attack?: string;
  Classification: string;
  Cost: string;
  Health?: string;
  Name: string;
  Printings: Printing[];
  Resource?: string;
  Rules?: string;
  Subname: string;
  Thwart?: string;
  Traits: string[];
  Type: string;
  Unique: boolean;
  ImageUrl: string;
  // Note: GetImageUrl method logic needs to be implemented in TypeScript outside the interface.
}

interface Printing {
  ArtificialId: string;
  PackId: string;
  PackNumber: string;
  Flavor?: string;
}