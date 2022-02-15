import { Address, BigInt } from "@graphprotocol/graph-ts";
import { IERC721 } from "../generated/ERC721NFTMarketPlace/IERC721";

export function fetchSymbol(collectionAddress: Address): string {
  let contract = IERC721.bind(collectionAddress);

  let symbolResult = contract.try_symbol();
  if (!symbolResult.reverted) {
    return symbolResult.value;
  }

  return "unknown";
}