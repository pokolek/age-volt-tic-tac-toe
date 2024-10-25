
export default interface Station {
  id: string;
  stationName: string;
  serialNumber: string;
  state: string;
  section: Section;
  currencyStation: string;
  currencyUser: string;
  hardwareManufacturer: string;
  model: string;
  coordinate: Coordinate;
  stationConnectors: StationConnector[];
  vatRate: number;
  stickerCodes: string;
  connectorsCount: number;
  connectorsAvailableCount: number;
  maxPower: number;
  plugTypes: string[];
  powerTypes: string[];
}

interface Section {
  id: string;
  name: string;
  description: string;
  category: string;
  coordinate: Coordinate;
  radius: number;
  location: Location;
}

interface Coordinate {
  lon: number;
  lat: number;
}

interface Location {
  id: string;
  locationNames: LocationName[];
  name: string;
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

interface LocationName {
  language: string;
  name: string;
}

interface StationConnector {
  id: string;
  ocppNumber: number;
  state: string;
  activeTransaction: boolean;
  publicPermission: boolean;
  pricing: Pricing;
  plugTypes: string[];
  permissionTypes: string[];
}

interface Pricing {
  priceStation: number;
  priceUser: number;
  priceUserTotal: number;
  currencyStation: string;
  currencyUser: string;
}
