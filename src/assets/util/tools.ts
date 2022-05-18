import {
  AssetStatus,
  AssetStatusNames,
} from "../components/AssetMenu/AssetMenu";

export const assetStatusToName = (assetStatus: AssetStatus) => {
  if (assetStatus === AssetStatus.ComingSoon)
    return AssetStatusNames.ComingSoon;
  if (assetStatus === AssetStatus.Financed) return AssetStatusNames.Financed;
  return AssetStatusNames.All;
};
