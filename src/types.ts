export type Partner = {
  id: string; // some partners may have string ids in your db.json
  name: string;
  country: string;
  logoFilename?: string;
  category?: string;
  isFavorite?: boolean;
};
export type Country = {
  name:string;
}