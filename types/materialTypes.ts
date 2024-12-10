export type Material = {
  materialName: string;
  materialWeight: number;
  materialPercentageMassFraction: number;
};

export type Proof = {
  jws: string;
  type: string;
  created: string;
  proofPurpose: string;
  verificationMethod: string;
};
