import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react-native";
import waitForExpect from "wait-for-expect";
import { GET_ASSETS } from "../../../api/useFetchAssets";
import AssetList from "../AssetList";
import testIDs from "../../../../res/testIDs";

describe("AssetList", () => {
  it("should render asset list", async () => {
    const assetListMock = {
      request: {
        query: GET_ASSETS,
        variables: { first: 10, status: null },
      },
      result: {
        data: {
          assets: {
            edges: [
              {
                node: {
                  id: "8a48558a-7b62-4d01-b420-c4473a5bcbce",
                  label: "Nike SB Dunk Low - City Drop",
                  heroImage:
                    "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/hero-image-1648824823.png",
                  heroColour: "#efedf8",
                  model: "Dunk Low City Drop",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-e73515fe-75c1-4747-bdb9-db6e7bb1af35-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-4f761d3a-47e9-4c46-a58a-8f39401c7667.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-7076992a-eb97-4cba-b30f-a621d2e90e2a-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-a08278cc-82b1-41f6-82a2-b8bad2a88018-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-2eb41497-7f2a-4783-85c6-46c93d6ce379-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-0d986b06-0329-4205-ba79-6139438236f8-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-f11c12d8-e84c-466c-b0b4-026982b9d1d3-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-230f675b-81a5-4be1-8ce6-62562ad096c3-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-fa0cd97e-4ea9-4c85-a0ff-7b7b0c510cc8-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-cd8ba0d2-d50b-4344-a520-3be2bced8563-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-d8e0f71c-7d62-46db-ab6d-5159851db8f4-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-9e2f1e38-8be0-4383-b9e5-bbee7a2488ba-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-df36b8ff-7a49-4bdb-94cc-fd335106da46-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/documents/medium-bf4e16e0-b38b-41b7-b9ce-bbd708b895af-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Marke",
                          value: "Nike SB",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Modell",
                          value: "Dunk Low",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Release Jahr",
                          value: "2004",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Exklusivität",
                          value: "Limitiert auf 202 Paare jeweils",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand",
                          value: "Deadstock",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Designer",
                          value: "Nike",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Größe Tokyo",
                          value: "US 9",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Größe London",
                          value: "US 9,5",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Colorway Tokyo",
                          value: "Muslin/Muslin",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Colorway London",
                          value: "Soft Grey / Magnet",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Style Code Tokyo",
                          value: "308268-111",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Style Code London",
                          value: "308269-111",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Material",
                          value: "Leder",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Original Box",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Lagerort",
                          value: "Berlin",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Verkäufer",
                          value: "Privat",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Eigentümer",
                          value: "Timeless",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Versicherung",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerbedingungen ",
                          value: "Professionelle Lagerung",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Ort des Verkäufers",
                          value: "Berlin",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "11873db3-a867-4219-96a5-92edb02570bd",
                  label: "Audemars Piguet Royal Oak City of Sails",
                  heroImage:
                    "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/hero-image-1645546175.png",
                  heroColour: "#d3f3e2",
                  model: "Royal Oak City of Sails Alinghi",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-0311d39b-96d4-4257-8550-d89da3698fed-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-65e8022b-1d4b-451a-9a56-de9f4d8ffefc.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-8403fba6-fbb5-4091-bed5-c8e8d9bc8797-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-bc1638c8-3b9f-4f41-b0b6-01de8d47831e-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-c955476f-ffdc-40b2-bc4c-faf470489a00-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-af308cde-2f74-40ae-ad7e-be69df52712b-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-7bff5266-ca22-4667-9816-409ba0568210-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-fd4d3832-0b83-4191-9af7-a1ed6b6bbd3e-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-b30100e7-3394-42a8-b32e-b0570113ba17-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/11873db3-a867-4219-96a5-92edb02570bd/documents/medium-c068bda8-d877-4d4c-9675-4d6e4f3c708f-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Exklusivität",
                          value: "Sehr selten (1250 Stück)",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Original",
                          value: "Vollständig Original",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Produktionsjahr",
                          value: "2003",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand",
                          value: "Gut",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Marke",
                          value: "Audemars Piguet",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Modell",
                          value: "Royal Oak City of Sails Alinghi",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Farbe",
                          value: "Schwarz",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Armband",
                          value: "Kautschuk",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Gehäuse",
                          value: "Stahl",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Referenz",
                          value: "25979ST/O/0002CA/01",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand des Zubehörs",
                          value:
                            "Audemars Piguet Extract de Archives (nachgereichte Papiere und Authentizitätsnachweis) ",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Glas",
                          value: "Saphirglas",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Uhrwerk",
                          value: "Automatik",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Designer",
                          value: "Audemars Piguet",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Diameter",
                          value: "39mm",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Schließe",
                          value: "Faltschließe",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Funktionen",
                          value: "Datum, Chronograph",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Geschlecht",
                          value: "Unisex",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lünette (Farbe)",
                          value: "Grau",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Ziffernblattfarbe",
                          value: "Grau/Rot",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Standort",
                          value: "Berlin",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Verkäufer",
                          value: "Lieblingskapital ",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Versicherung",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerbedingungen",
                          value: "Professionelle Lagerung",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Standort des Verkäufers",
                          value: "Bielefeld",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "0f6182cd-ac1b-4b19-8811-6048b542c358",
                  label: "Lady Gaga Stage worn Alien Costume",
                  heroImage:
                    "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/hero-image-1646814069.png",
                  heroColour: "#e8f4ff",
                  model: "Alien Costume",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-ae0a4fd3-892d-44ea-bac6-b4d86c44bcee-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-752d8c0a-0181-4783-962d-92d8345e5c77.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-8b3014a3-9a21-4655-b7a8-d89e9c3df7c4-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-dc1339a6-60ab-4d6b-8b06-2518c0aebfbf-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-c51726b5-efef-4d35-aab3-dc074d8a81bd-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-6c9b75be-1472-46da-acb1-e69209a88277-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-f92d827a-a3ea-4243-a68a-a5b26e7fcc37-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-4e0489a3-0e90-4847-9fb4-dcc1bf862e9e-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-d529653c-8c59-4f56-83cd-bb8568e2cb29-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-7bf9cc74-a64e-447e-94cb-c65c281ad4aa-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-359e714f-dc17-4bd2-97aa-2dcc46c797be-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-ad43c939-9fbc-4fd5-892e-f4711fd691d5-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-9adabdc2-22f5-4475-aa4d-31a08830e023-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/0f6182cd-ac1b-4b19-8811-6048b542c358/documents/medium-82406261-9a50-47bc-b29d-cb957c35b3fc-1649.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Art",
                          value: "Handgefertigt",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Designer",
                          value: "Antonio Urzi für Giorgio Armani",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Material",
                          value: "Verschiedene",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Show-Piece",
                          value: "Alien Kostüm",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Bestehend aus",
                          value: "Mieder, Kopfbedeckung, Handschuhe",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Exklusivität",
                          value: "1/5",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Authentizitätszertifikat",
                          value: "COA vom Designer Antonio Urzi ",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Lagerort",
                          value: "Berlin",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Verkäufer",
                          value: "Pop Culture Memorabilia Ltd",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Eigentümer",
                          value: "Timeless",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Versicherung",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerbedingungen",
                          value: "Professionelle Lagerung",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Ort des Verkäufers",
                          value: "Dublin, Irland",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419",
                  label: "Azuki #982",
                  heroImage:
                    "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/hero-image-1651134798.png",
                  heroColour: "#f9f0f2",
                  model: "#982",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/documents/medium-df1d6c8c-8bf4-4a70-bdb7-b93aa4d62e9a-1650884710.453732.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/documents/medium-54bc0e6e-f6bb-4973-85b2-fd5afd348055-1650884702.3715332.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/documents/medium-1f0d2a57-3cb2-4bcc-aa67-53809444d64a-1650884703.7512655.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/documents/medium-5b0c8df8-0606-44fa-bd37-01f1d7b28103-1650884704.5605018.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/documents/medium-b62998c6-15f6-4960-ae27-7492b5030d6e-1650884705.3145556.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/documents/medium-3eaf6879-0a20-4496-baa0-480b385f47fb-1650884706.0506437.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/documents/medium-578e7296-9237-4745-acae-bd90db73e193-1650884706.7800658.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/ec4f6fe7-9fcf-43ad-ab1f-8653f9ff6419/documents/medium-f40f4c57-9bd7-4ee5-8203-c0e3f8d9ee71-1650884707.3597395.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Projekt",
                          value: "Azuki",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "NFT Nummer",
                          value: "#982",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Creator",
                          value: "Chiru Labs",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Utility",
                          value: "Kunst & Roadmap",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Blockchain",
                          value: "Ethereum Blockchain",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Token-Standard",
                          value: "ERC-721",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Background: Off White A",
                          value: "18%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Clothing: Maroon Yukata",
                          value: "2%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Ear: Corded Earbuds",
                          value: "2%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Eyes: White",
                          value: "2%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Hair: Brown Long",
                          value: "1%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Mouth: Wheat Straw",
                          value: "3%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Offhand: Bat",
                          value: "4%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Type: Human",
                          value: " 90%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Typ des Datenträgers",
                          value: "Hardware Wallet",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Lagerort",
                          value: "Concedus - Deutschland",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Crypto-Verwahrer",
                          value: "Concedus",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "1d5064b9-407d-4590-8c2a-15f26240152b",
                  label: "Banksy – Very Little Helps, signiert",
                  heroImage:
                    "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/hero-image-1652769702.png",
                  heroColour: "#f0faff",
                  model: "Very Little Helps",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/documents/medium-d9db3796-16ef-4385-a64b-02ee4465bc72-1652769908.7717352.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/documents/medium-c5b0fbf4-3a19-4aa4-a8dc-d75bd5ab2f3f.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/documents/medium-5533688e-115f-4a83-b678-d728a8b5df57-1652769903.6728246.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/documents/medium-bc76c596-e38f-463b-876b-2e095f751f0f-1652769904.2272594.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/documents/medium-ba14398b-0770-4033-b852-7e3c2d4482db-1652769904.9542785.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/documents/medium-cd6420d5-22c0-41a6-b7ba-71102106932d-1652769905.5683155.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/documents/medium-7c3c87c2-1cc3-4741-b0cc-92b627e8fe31-1652769906.193274.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/1d5064b9-407d-4590-8c2a-15f26240152b/documents/medium-b494cdf2-a9a4-4e00-b621-56978858aaa2-1652769906.8235753.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Künstler",
                          value: "Banksy",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Kunstwerk",
                          value: "Very Little Helps",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Jahr",
                          value: "2008",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Art",
                          value: "Siebdruck",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand",
                          value: "Sehr gut",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Signature",
                          value: "Signiert",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Rahmen",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Edition",
                          value: "299",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Maße",
                          value: "51 cm x 37 cm",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Material",
                          value: "Siebdruck auf Papier",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Exklusivität",
                          value: "Sehr selten",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Eigentümer",
                          value: "Timeless",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerort",
                          value: "Berlin",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerbedingungen",
                          value: "Museal",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Versicherung",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Verkäufer",
                          value: "Maddox Gallery London",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Ort des Verkäufers",
                          value: "London, UK",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Publisher",
                          value: "picturesonwalls (POW)",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Authentizitätszertifikat",
                          value: "Pest Control CoA",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Blue-Chip",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "34b533bf-5390-4fe1-a74b-094b8a817845",
                  label: "Patek Philippe Aquanaut 5167",
                  heroImage:
                    "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/hero-image-1651478985.png",
                  heroColour: "#fafff0",
                  model: "Aquanaut",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-692c6497-41a1-4f43-a7a8-dedbd5d57fe6-1651483322.4147174.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-7f0d5ff6-ad0f-4ef2-8be7-bbcfa363cfd8.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-ea58cac8-5d78-4bea-b4db-60a9508be3f6-1651483320.653648.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-27cf69a1-6602-4717-8d28-5c792e7da188-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-fd62e1bd-d61d-45f6-bf9e-7ec4c19e0a88-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-9204924a-b769-4adb-8988-90cb631abb29-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-4c65d3dd-adee-4b1b-bada-549f707a678c-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-c06f30b3-29fa-405e-9c23-9a138b0f6e95-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-40a95506-4105-4c9d-932c-b580cc030c38-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-1c55b845-3bba-4897-8fec-d7db6fab7683-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-b98c4df5-4751-42ea-8a85-4a3adb9b6d4d-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-24164f79-e25a-4673-883a-3f1039a2ba74-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-1c590e4d-5fb4-4fb3-93a8-7e3b1ad19ad6-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/34b533bf-5390-4fe1-a74b-094b8a817845/documents/medium-f4d35ba0-30c8-4d4d-bdfc-ab14f76b7b7b-1651.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Marke",
                          value: "Patek Philippe",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Modell",
                          value: "Aquanaut",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Referenz",
                          value: "5167A",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Produktionsjahr",
                          value: "2014",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand",
                          value: "Sehr gut",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Farbe",
                          value: "Schwarz",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Original",
                          value: "Vollständig Original",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Gehäuse",
                          value: "Stahl",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Armband",
                          value: "Kautschuk",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Exklusivität",
                          value: "Selten",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand des Zubehörs",
                          value: "Mit Box und Papieren",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Standort",
                          value: "Timeless, Berlin",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerbedingungen",
                          value: "Professionelle Lagerung",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Versicherung",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Verkäufer",
                          value: "Gewerblich",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Standort des Verkäufers",
                          value: "Bielefeld",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Glas",
                          value: "Saphirglas",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Diameter",
                          value: "41mm",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Funktionen",
                          value: "Datum",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Uhrwerk",
                          value: "324 SC",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Aufzug",
                          value: "Automatik",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Designer",
                          value: "Patek Philippe",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Wasserdicht",
                          value: "10 ATM",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lünette (Farbe)",
                          value: "Stahl",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Ziffernblattfarbe",
                          value: "Schwarz",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Geschlecht",
                          value: "Unisex",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Schließe",
                          value: "Faltschließe",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Originale Box",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Originale Papiere",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13",
                  label: "Nike Air Jordan 6 Macklemore ‘Clay’",
                  heroImage:
                    "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/hero-image-1647017974.png",
                  heroColour: "#feece0",
                  model: "Air Jordan 6 Macklemore ‘Clay’",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-6aa58d0d-7fc7-4dab-b79d-f79d6e4311b1-1650545584.906888.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-24577e28-1238-4c2b-b00c-55aa1dc63eb2.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-a7442d63-1907-4bd7-b927-274929f06f3a-1650545587.6206038.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-27118945-546f-4820-a900-0791b8c1b99f-1650545588.305205.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-b13dceff-dd3e-4eeb-a1dc-ad69018967a3-1650545588.8774362.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-70b0f632-1163-4ff9-9ad8-62f2b4fe14bb-1650545589.7146006.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-5e9b410f-86cb-49fb-8a11-8ffaf94ce740-1650545590.661974.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-dce6c6a2-9e60-4c54-835e-7421ed6ea9ff-1650545591.350166.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-5e297e71-65e5-4e2f-95cd-d2f9ab3c11e5-1650545592.0810506.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-e0a9fe2f-eed8-4f7e-9a80-1abbb9cf95e0-1650545593.253053.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-d82768e0-b088-47f9-945c-654f1492b196-1650545594.0344477.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-1354a924-cb7c-49b3-a5ef-de4b69afda6c-1650545594.8512373.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-0e95c9fb-94a4-4ae4-bd6a-f99497ce1af0-1650545595.4806597.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/b8ba8d9d-afbf-4c82-a0d3-c16fc0cc3a13/documents/medium-d624b79a-5cac-44f1-bf32-ff3c1208fecc-1650545596.2428932.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Marke",
                          value: "Nike",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Modell",
                          value: "Air Jordan 6 Macklemore 'Clay'",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Release Jahr",
                          value: "2014",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Exklusivität",
                          value: "1 von 23 Paaren",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand",
                          value: "Deadstock",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Designer",
                          value: "Nike; Macklemore",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Größe",
                          value: "US 11",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Colorway",
                          value: "Light Redwood/Black-What Pink",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Style Code",
                          value: "522208-520",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Material",
                          value: "Diverse",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Original Box",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Eigentümer",
                          value: "Timeless",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerort",
                          value: "Berlin",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerbedingungen ",
                          value: "Professionelle Lagerung",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Versicherung",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Verkäufer",
                          value: "Privat",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Ort des Verkäufers",
                          value: "München",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "35ab3b39-de70-45d8-8e78-efdeadb82056",
                  label: "WIN ME: Nike AJ1 Travis Scott x Fragment",
                  heroImage:
                    "https://documents.timeless.investments/assets/35ab3b39-de70-45d8-8e78-efdeadb82056/hero-image-1638431353.png",
                  heroColour: "#ecf7ff",
                  model: "Air Jordan 1 Retro High",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/35ab3b39-de70-45d8-8e78-efdeadb82056/documents/medium-f87a93d3-1adf-4363-8bde-7eb54d1fb141-1637.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/35ab3b39-de70-45d8-8e78-efdeadb82056/documents/medium-fa0cac46-3603-422b-8259-2e8a54fb447c-1637.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/35ab3b39-de70-45d8-8e78-efdeadb82056/documents/medium-4e98cdde-b537-4696-af25-5700b0f9b3af-1637.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/35ab3b39-de70-45d8-8e78-efdeadb82056/documents/medium-36e450d4-9bef-4d62-aa53-444ff54eba35-1637.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/35ab3b39-de70-45d8-8e78-efdeadb82056/documents/medium-8b4b8435-fc78-49d1-b1f8-567b1a03c1a8-1637.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/35ab3b39-de70-45d8-8e78-efdeadb82056/documents/medium-bdccad4b-8630-4c5b-9907-d983bd843f41-1637.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "",
                          value: "",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Marke",
                          value: "Nike / Fragment",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Modell",
                          value: "Air Jordan 1 Retro High",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Größe",
                          value: "US 9,5",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand",
                          value: "Deadstock",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Colorway",
                          value: "Sail/Black-Military Blue-Shy Pink",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Designer",
                          value: "Nike / Fragment",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Material",
                          value: "Leder",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Style Code",
                          value: "DH3227-105",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Original Box",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Release Jahr",
                          value: "2021",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Exklusivität",
                          value: "Sehr limitiert",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "c8cdc53d-a307-4d15-8d48-0b51aea77331",
                  label: "Beanz #9670",
                  heroImage:
                    "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/hero-image-1651134825.png",
                  heroColour: "#ffeaea",
                  model: "#9670",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-a855aeca-4fec-4c94-b86e-d177219ffeb8-1651050443.434274.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-636ad2e1-bbbd-4284-922a-2ca2c1e1121a.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-318ec5d6-3494-404e-b25d-5148480e7234-1651053921.1347365.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-ca5e8719-9b59-4c0c-b95b-5622995429e5-1651053921.8294935.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-a8c7bfa9-7bda-4889-8f4e-4bb4703436b3-1651053922.5174165.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-9413a1aa-6c81-46df-bf32-25691780deeb-1651053923.1700113.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-d679f4d5-79af-4209-8c8f-4a7f5c9ea4ce-1651054254.3404317.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-d3694ab3-1a07-41cd-a119-c0bd706d8f20-1651054253.1740901.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/c8cdc53d-a307-4d15-8d48-0b51aea77331/documents/medium-8a000ed5-b82c-4c6f-ac70-e34277696df3-1651054253.772299.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Projekt",
                          value: "Beanz Official",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "NFT Nummer",
                          value: "#9670",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Creator",
                          value: "TeamAzuki",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Utility",
                          value: "Access/Airdrops",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Blockchain",
                          value: "Ethereum",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Anzahl NFTs des Projekts",
                          value: "19,944",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Background: Off White B",
                          value: "17%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Clothing: Red Noragi",
                          value: "2%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Eyes: Half-open",
                          value: "9%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Face: Kabuki Face Paint",
                          value: "0,52%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Headgear: Black Bucket Hat",
                          value: "2%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Mouth: Uwu",
                          value: "5%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Type: Purple Bean",
                          value: "9%",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Token Standard",
                          value: "ERC-721",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Lagerort",
                          value: "Concedus, Deutschland",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Crypto-Verwalter",
                          value: "Concedus",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
              {
                node: {
                  id: "fbe08972-95a8-4239-9a2c-aa67034dd8e1",
                  label: 'WIN ME - Banksy "Trolley Hunters"',
                  heroImage:
                    "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/hero-image-1648217447.png",
                  heroColour: "#e5f3ff",
                  model: "Trolley Hunters",
                  gallery: [
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-3abe1003-0bb4-4e25-bfc7-c636b0d3e1ae-1650893657.9617808.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-0a29cd92-37ca-4c55-8406-0a253bab05fa-1650893658.6451387.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-98fed6f5-d7c0-4460-911f-2776ddc14687-1650893659.3217213.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-dea39145-8cea-40cd-9441-5d143fc5f36a-1650893660.198428.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-8fe198a2-9ed6-4518-aa24-a2447a743629-1650893660.9845545.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-465b1faa-23d2-4145-b58e-151cc7ae0e24-1650893661.7581635.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-1bd3c3eb-a4d1-4f93-a4ec-f366dc1287a7-1650893662.4929621.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-a03c6b82-db37-4549-b63f-f438b5ba556b-1650893663.2095885.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-17350045-930e-4762-9b8b-90cf7217447a-1650893663.9884772.jpeg",
                      __typename: "AssetImageDocument",
                    },
                    {
                      mediumUrl:
                        "https://documents.timeless.investments/assets/fbe08972-95a8-4239-9a2c-aa67034dd8e1/documents/medium-1dfbd99a-4f36-4ecd-a5f7-fd0f3cac27e1-1650893664.999418.jpeg",
                      __typename: "AssetImageDocument",
                    },
                  ],
                  assetDetails: [
                    {
                      dataParsed: [
                        {
                          key: "Authentizitätszertifikat",
                          value: "Pest Control CoA",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Blue-Chip",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Eigentümer",
                          value: "Timeless",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerort",
                          value: "Berlin",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Lagerbedingungen",
                          value: "Museal",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Versicherung",
                          value: "Ja",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Verkäufer",
                          value: "Andipa Gallery",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Ort des Verkäufers",
                          value: "London, UK",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                    {
                      dataParsed: [
                        {
                          key: "Künstler",
                          value: "Banksy",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Kunstwerk",
                          value: "Trolley Hunters (Colour), 2007",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Art",
                          value: "Screenprint on Paper",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Zustand",
                          value: "Mint Condition",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Serie",
                          value: "Barely Legal",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Signature",
                          value: "Handsigniert",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Edition",
                          value: "750",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Maße",
                          value: "50 x 70 cm",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Material",
                          value: "Screenprint on Paper",
                          __typename: "AssetDetailParsedData",
                        },
                        {
                          key: "Exklusivität",
                          value: "Extrem selten (gerade in mint condition)",
                          __typename: "AssetDetailParsedData",
                        },
                      ],
                      __typename: "AssetDetail",
                    },
                  ],
                  __typename: "Asset",
                },
                __typename: "AssetEdge",
              },
            ],
            __typename: "PaginatedAssets",
          },
        },
      },
    };

    const { queryAllByTestId, getByText } = render(
      <MockedProvider mocks={[assetListMock]} addTypename={false}>
        <AssetList />
      </MockedProvider>
    );
    // const assetListItemTouchable = getByTestId(testIDs.assets.list.header.title);
    const assetListItemTouchable = queryAllByTestId(
      testIDs.assets.list.item.id
    );
    console.log(assetListItemTouchable);
    // expect(assetListItemTouchable).toBeTruthy();
    waitForExpect(() => {
      console.log(assetListItemTouchable[0].props.testID);
      expect(assetListItemTouchable[0].props.testID).toBe("d");
    });
  });
});

export {};
