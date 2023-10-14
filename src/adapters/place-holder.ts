import axios from "axios";
import { injectable } from "tsyringe";

@injectable()
export class PlaceHolderAdapter {
  private _placeHolderURL: string;
  
  constructor() {
    this._placeHolderURL = process.env.PLACE_HOLDER_URL!
  }

  async getUsersPlaceHolder() {
    const url = `${this._placeHolderURL}/users`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
      
    }
  }
}