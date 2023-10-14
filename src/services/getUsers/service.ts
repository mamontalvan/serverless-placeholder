import 'reflect-metadata';
import { container } from "tsyringe";
import { PlaceHolderAdapter } from "../../adapters/place-holder";

const placeHolderApi = container.resolve(PlaceHolderAdapter)

export const getUsersPlaceHolder = async() => {
    const users2 = await placeHolderApi.getUsersPlaceHolder();
    return users2;
}