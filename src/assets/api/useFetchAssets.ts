import { DocumentNode, gql, useApolloClient } from "@apollo/client";
import { useEffect } from "react";
import GetAssets from "./GetAssets.graphql";
import useAsync from "../../util/useAsync";
import { AssetStatus } from "../components/AssetMenu/AssetMenu";

export const GET_ASSETS: DocumentNode = gql`
  ${GetAssets}
`;

const useFetchAssets = function useFetchAssets<T>(
  first: number,
  status: AssetStatus | null
) {
  const client = useApolloClient();
  const {
    status: apiStatus,
    value,
    error,
    execute,
  } = useAsync(
    () =>
      client.query({
        query: GET_ASSETS,
        variables: { first, status },
      }),
    false
  );

  useEffect(() => {
    execute();
  }, [status]);

  return { loading: apiStatus, data: value, error };
};

export default useFetchAssets;
