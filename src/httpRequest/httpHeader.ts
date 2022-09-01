import { HttpRequestHeaderTypes, RequestHeaderProps } from "./interfaces";

interface CustomHeaderInterface {
  Accept?: string;
  Authorization?: string;
  type?: string;
  "Content-Type"?: string;
}

const jsonHeader: CustomHeaderInterface = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

const multiPartHeader: CustomHeaderInterface = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};

export const httpHeader = (
  params: RequestHeaderProps
): CustomHeaderInterface => {
  switch (params.headerType) {
    case HttpRequestHeaderTypes.MultiPart:
      return multiPartHeader;
    default:
      return jsonHeader;
  }
};
