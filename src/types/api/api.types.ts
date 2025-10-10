export enum ApiRequestStatus {
  IDLE,
  PENDING,
  REJECTED,
  FULFILLED,
}


// export type ApiRequestErrorType = {
//   response: {
//     data: {
//       description: string;
//       message: string;
//     };
//     status: number;
//   };
// };

// export type StoredErrorResponseType = {
//   message: string;
//   code: number;
// };

// eslint-disable-next-line
export type ApiRequestDataType<DataType = any> = {
  status: ApiRequestStatus;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  data?: DataType;
  success?: boolean;
};
