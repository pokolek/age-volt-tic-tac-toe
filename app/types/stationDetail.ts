
export default interface StationDetail {
  id: string;
  stationName: string;
  serialNumber: string;
  state: string;
  section: SectionDetail;
  currencyStation: string;
  currencyUser: string;
  hardwareManufacturer: string;
  model: string;
  coordinate: Coordinate;
  stationConnectors: StationConnectorDetail[];
  vatRate: number;
}

interface SectionDetail {
  id: string;
  name: string;
  description: string;
  category: string;
  coordinate: Coordinate;
  radius: number;
  stationsCount: number;
  location: LocationDetail;
  locationId: string;
  locationName: string;
  stations: StationSummary[];
}

interface LocationDetail {
  id: string;
  locationNames: LocationName[];
  name: string;
  sections: SectionSummary[];
  stationsCount: number;
  stationsActiveCount: number;
  address: string;
  houseNum: string;
  city: string;
  zip: string;
  country: string;
  category: string;
  description: string;
  timeZone: string;
  owner: string;
}

interface StationSummary {
  id: string;
  name: string;
  connectorsCount: number;
  connectorsAvailableCount: number;
  stationConnectors: StationConnectorSummary[];
  level: string;
}

interface StationConnectorSummary {
  id: string;
  ocppNumber: number;
  powerType: string;
  maxPower: number;
  plugTypes: string[];
  level: string;
}

interface SectionSummary {
  id: string;
  name: string;
  description: string;
  category: string;
  coordinate: Coordinate;
  radius: number;
  stations: StationSummary[];
  level: string;
}

interface Coordinate {
  lon: number;
  lat: number;
}

interface LocationName {
  language: string;
  name: string;
}

interface StationConnectorDetail {
  id: string;
  ocppNumber: number;
  state: string;
  activeTransaction: boolean;
  publicPermission: boolean;
  pricing: PricingDetail;
  plugTypes: string[];
  permissionTypes: string[];
  powerType: string;
  internalState: number;
  voltage: number;
  maxPower: number;
  availability: Availability[];
  permissions: Permission[];
}

interface PricingDetail {
  priceStation: number;
  priceUser: number;
  priceUserTotal: number;
  currencyStation: string;
  currencyUser: string;
}

interface Availability {
  day: string;
  times: AvailabilityTime[];
}

interface AvailabilityTime {
  referenceUnit: string;
  priceStation: number;
  priceUser: number;
  priceUserTotal: number;
  from: string;
  to: string;
}

interface Permission {
  id: string;
  type: string;
  activeNow: boolean;
  referenceUnit: string;
  priceStation: number;
  priceUser: number;
  priceUserTotal: number;
  nonStop: boolean;
  additionalDataSettings: unknown;
  pricings: PricingDetail[];
}
