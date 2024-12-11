export type Material = {
  materialName: string;
  materialWeight: number;
  materialPercentageMassFraction: number;
};

export type KeyValuePair = {
  [key: string]: string;
};

export type Proof = {
  jws: string;
  type: string;
  created: string;
  proofPurpose: string;
  verificationMethod: string;
};

type CredentialSubject = {
  ratedCapacity: string;
  voltageMaximum: string;
  voltageNominal: string;
  lifeCycleStatus: string;
  cellChemistry: {
    anodeActiveMaterials: Material[];
    electrolyteComposition: Material[];
  };
  performanceMetrics: KeyValuePair;
  safetyDurabilityTests: KeyValuePair;
  temperatureToleranceTests: KeyValuePair;
  batteryCellHomologation: KeyValuePair;
  CTScans: {
    batteryCellScan: KeyValuePair;
    housingAndTheCathode: KeyValuePair;
    casingCathodeAndAnode: KeyValuePair;
  };
};

type BatteryData = {
  issuanceDate: string;
  type: string[];
  credentialSubject: CredentialSubject;
  proof: KeyValuePair;
};

export type AppProps = {
  battery: BatteryData[];
};
