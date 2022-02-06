type PossibleReturnTypes =
  | "string"
  | "string[]"
  | "Date"
  | "Date[]"
  | "number"
  | "any"
  | "boolean"
  | "void";
type PossibleParamInputTypes = "string" | "number" | "boolean";
export interface FakerDataType {
  [key: string]: {
    [key: string]: ParamsInputType;
  };
}
export interface ParamsInputType {
  args: {
    optional: boolean;
    type: PossibleParamInputTypes;
    name: string;
  }[];
  returnType: PossibleReturnTypes[];
}
const data: FakerDataType = {
  lorem: {
    word: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
    words: {
      args: [{ optional: true, type: "number", name: "num" }],
      returnType: ["string"],
    },
    sentence: {
      args: [
        { optional: true, type: "number", name: "wordCount" },
        { optional: true, type: "number", name: "range" },
      ],
      returnType: ["string"],
    },
    slug: {
      args: [{ optional: true, type: "number", name: "wordCount" }],
      returnType: ["string"],
    },
    sentences: {
      args: [
        { optional: true, type: "number", name: "sentenceCount" },
        { optional: true, type: "string", name: "separator" },
      ],
      returnType: ["string"],
    },
    paragraph: {
      args: [{ optional: true, type: "number", name: "sentenceCount" }],
      returnType: ["string"],
    },
    paragraphs: {
      args: [
        { optional: true, type: "number", name: "paragraphCount" },
        { optional: true, type: "string", name: "separator" },
      ],
      returnType: ["string"],
    },
    lines: {
      args: [{ optional: true, type: "number", name: "lineCount" }],
      returnType: ["string"],
    },
  },
  music: { genre: { args: [], returnType: ["string"] } },
  date: {
    past: {
      args: [
        { optional: true, type: "number", name: "years" },
        { optional: true, type: "string", name: "refDate" },
      ],
      returnType: ["Date"],
    },
    future: {
      args: [
        { optional: true, type: "number", name: "years" },
        { optional: true, type: "string", name: "refDate" },
      ],
      returnType: ["Date"],
    },
    between: {
      args: [
        { optional: false, type: "string", name: "from" },
        { optional: false, type: "string", name: "to" },
      ],
      returnType: ["Date"],
    },
    betweens: {
      args: [
        { optional: false, type: "string", name: "from" },
        { optional: false, type: "string", name: "to" },
        { optional: true, type: "number", name: "num" },
      ],
      returnType: ["Date[]"],
    },
    recent: {
      args: [
        { optional: true, type: "number", name: "days" },
        { optional: true, type: "string", name: "refDate" },
      ],
      returnType: ["Date"],
    },
    soon: {
      args: [
        { optional: true, type: "number", name: "days" },
        { optional: true, type: "string", name: "refDate" },
      ],
      returnType: ["Date"],
    },
  },
  animal: {
    dog: { args: [], returnType: ["string"] },
    cat: { args: [], returnType: ["string"] },
    snake: { args: [], returnType: ["string"] },
    bear: { args: [], returnType: ["string"] },
    lion: { args: [], returnType: ["string"] },
    cetacean: { args: [], returnType: ["string"] },
    horse: { args: [], returnType: ["string"] },
    bird: { args: [], returnType: ["string"] },
    cow: { args: [], returnType: ["string"] },
    fish: { args: [], returnType: ["string"] },
    crocodilia: { args: [], returnType: ["string"] },
    insect: { args: [], returnType: ["string"] },
    rabbit: { args: [], returnType: ["string"] },
    type: { args: [], returnType: ["string"] },
  },
  vehicle: {
    vehicle: { args: [], returnType: ["string"] },
    manufacturer: { args: [], returnType: ["string"] },
    model: { args: [], returnType: ["string"] },
    type: { args: [], returnType: ["string"] },
    fuel: { args: [], returnType: ["string"] },
    vin: { args: [], returnType: ["string"] },
    color: { args: [], returnType: ["string"] },
    vrm: { args: [], returnType: ["string"] },
    bicycle: { args: [], returnType: ["string"] },
  },
  phone_number: {
    phoneNumber: {
      args: [{ optional: true, type: "string", name: "format" }],
      returnType: ["string"],
    },
    phoneNumberFormat: {
      args: [
        { optional: true, type: "number", name: "phoneFormatsArrayIndex" },
      ],
      returnType: ["string"],
    },
    phoneFormats: { args: [], returnType: ["string"] },
  },
  company: {
    suffixes: { args: [], returnType: ["string[]"] },
    companyName: {
      args: [{ optional: true, type: "number", name: "format" }],
      returnType: ["string"],
    },
    companySuffix: { args: [], returnType: ["string"] },
    catchPhrase: { args: [], returnType: ["string"] },
    bs: { args: [], returnType: ["string"] },
    catchPhraseAdjective: { args: [], returnType: ["string"] },
    catchPhraseDescriptor: { args: [], returnType: ["string"] },
    catchPhraseNoun: { args: [], returnType: ["string"] },
    bsAdjective: { args: [], returnType: ["string"] },
    bsBuzz: { args: [], returnType: ["string"] },
    bsNoun: { args: [], returnType: ["string"] },
  },
  name: {
    firstName: {
      args: [{ optional: true, type: "string", name: "gender" }],
      returnType: ["string"],
    },
    lastName: {
      args: [{ optional: true, type: "string", name: "gender" }],
      returnType: ["string"],
    },
    middleName: {
      args: [{ optional: true, type: "string", name: "gender" }],
      returnType: ["string"],
    },
    findName: {
      args: [
        { optional: true, type: "string", name: "firstName" },
        { optional: true, type: "string", name: "lastName" },
        { optional: true, type: "string", name: "gender" },
      ],
      returnType: ["string"],
    },
    jobTitle: { args: [], returnType: ["string"] },
    gender: {
      args: [{ optional: false, type: "boolean", name: "binary" }],
      returnType: ["string"],
    },
    prefix: {
      args: [{ optional: true, type: "string", name: "gender" }],
      returnType: ["string"],
    },
    suffix: { args: [], returnType: ["string"] },
    title: { args: [], returnType: ["string"] },
    jobDescriptor: { args: [], returnType: ["string"] },
    jobArea: { args: [], returnType: ["string"] },
    jobType: { args: [], returnType: ["string"] },
  },
  fake: {
    fake: {
      args: [{ optional: false, type: "string", name: "str" }],
      returnType: ["string"],
    },
  },
  mersenne: {
    rand: {
      args: [
        { optional: true, type: "number", name: "max" },
        { optional: true, type: "number", name: "min" },
      ],
      returnType: ["number"],
    },
    seed: {
      args: [{ optional: false, type: "number", name: "S" }],
      returnType: ["void"],
    },
    seed_array: {
      args: [{ optional: false, type: "string", name: "A" }],
      returnType: ["void"],
    },
  },
  commerce: {
    color: { args: [], returnType: ["string"] },
    department: { args: [], returnType: ["string"] },
    productName: { args: [], returnType: ["string"] },
    price: {
      args: [
        { optional: true, type: "number", name: "min" },
        { optional: true, type: "number", name: "max" },
        { optional: true, type: "number", name: "dec" },
        { optional: true, type: "string", name: "symbol" },
      ],
      returnType: ["string"],
    },
    productAdjective: { args: [], returnType: ["string"] },
    productMaterial: { args: [], returnType: ["string"] },
    product: { args: [], returnType: ["string"] },
    productDescription: { args: [], returnType: ["string"] },
  },
  random: {
    uuid: { args: [], returnType: ["string"] },
    boolean: { args: [], returnType: ["boolean"] },
    word: {
      args: [{ optional: true, type: "string", name: "type" }],
      returnType: ["string"],
    },
    words: {
      args: [{ optional: true, type: "number", name: "count" }],
      returnType: ["string"],
    },
    image: { args: [], returnType: ["string"] },
    locale: { args: [], returnType: ["string"] },
    hexaDecimal: {
      args: [{ optional: true, type: "number", name: "count" }],
      returnType: ["string"],
    },
  },
  address: {
    zipCode: {
      args: [{ optional: true, type: "string", name: "format" }],
      returnType: ["string"],
    },
    zipCodeByState: {
      args: [{ optional: false, type: "string", name: "state" }],
      returnType: ["string", "number"],
    },
    city: {
      args: [{ optional: true, type: "string", name: "format" }],
      returnType: ["string"],
    },
    cityPrefix: { args: [], returnType: ["string"] },
    citySuffix: { args: [], returnType: ["string"] },
    cityName: { args: [], returnType: ["string"] },
    streetName: { args: [], returnType: ["string"] },
    streetAddress: {
      args: [{ optional: true, type: "boolean", name: "useFullAddress" }],
      returnType: ["string"],
    },
    streetSuffix: { args: [], returnType: ["string"] },
    streetPrefix: { args: [], returnType: ["string"] },
    secondaryAddress: { args: [], returnType: ["string"] },
    county: { args: [], returnType: ["string"] },
    country: { args: [], returnType: ["string"] },
    countryCode: {
      args: [{ optional: true, type: "string", name: "alphaCode" }],
      returnType: ["string"],
    },
    state: {
      args: [{ optional: true, type: "boolean", name: "useAbbr" }],
      returnType: ["string"],
    },
    stateAbbr: { args: [], returnType: ["string"] },
    latitude: {
      args: [
        { optional: true, type: "number", name: "max" },
        { optional: true, type: "number", name: "min" },
        { optional: true, type: "number", name: "precision" },
      ],
      returnType: ["string"],
    },
    longitude: {
      args: [
        { optional: true, type: "number", name: "max" },
        { optional: true, type: "number", name: "min" },
        { optional: true, type: "number", name: "precision" },
      ],
      returnType: ["string"],
    },
    direction: {
      args: [{ optional: true, type: "boolean", name: "useAbbr" }],
      returnType: ["string"],
    },
    cardinalDirection: {
      args: [{ optional: true, type: "boolean", name: "useAbbr" }],
      returnType: ["string"],
    },
    ordinalDirection: {
      args: [{ optional: true, type: "boolean", name: "useAbbr" }],
      returnType: ["string"],
    },
    nearbyGPSCoordinate: {
      args: [
        { optional: true, type: "number", name: "coordinate" },
        { optional: true, type: "number", name: "radius" },
        { optional: true, type: "boolean", name: "isMetric" },
      ],
      returnType: ["string[]"],
    },
    timeZone: { args: [], returnType: ["string"] },
  },
  word: {
    adjective: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
    adverb: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
    conjunction: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
    interjection: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
    noun: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
    preposition: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
    verb: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
  },
  database: {
    column: { args: [], returnType: ["string"] },
    type: { args: [], returnType: ["string"] },
    collation: { args: [], returnType: ["string"] },
    engine: { args: [], returnType: ["string"] },
  },
  helpers: {
    slugify: {
      args: [{ optional: true, type: "string", name: "string" }],
      returnType: ["string"],
    },
    replaceSymbolWithNumber: {
      args: [
        { optional: true, type: "string", name: "string" },
        { optional: true, type: "string", name: "symbol" },
      ],
      returnType: ["string"],
    },
    replaceSymbols: {
      args: [{ optional: true, type: "string", name: "string" }],
      returnType: ["string"],
    },
    replaceCreditCardSymbols: {
      args: [
        { optional: true, type: "string", name: "string" },
        { optional: true, type: "string", name: "symbol" },
      ],
      returnType: ["string"],
    },
    repeatString: {
      args: [
        { optional: false, type: "string", name: "string" },
        { optional: true, type: "number", name: "num" },
      ],
      returnType: ["string"],
    },
    regexpStyleStringParse: {
      args: [{ optional: true, type: "string", name: "string" }],
      returnType: ["string"],
    },
    mustache: {
      args: [
        { optional: false, type: "string", name: "str" },
        { optional: false, type: "string", name: "substring" },
      ],
      returnType: ["string"],
    },
  },
  internet: {
    avatar: { args: [], returnType: ["string"] },
    email: {
      args: [
        { optional: true, type: "string", name: "firstName" },
        { optional: true, type: "string", name: "lastName" },
        { optional: true, type: "string", name: "provider" },
      ],
      returnType: ["string"],
    },
    exampleEmail: {
      args: [
        { optional: true, type: "string", name: "firstName" },
        { optional: true, type: "string", name: "lastName" },
      ],
      returnType: ["string"],
    },
    userName: {
      args: [
        { optional: true, type: "string", name: "firstName" },
        { optional: true, type: "string", name: "lastName" },
      ],
      returnType: ["string"],
    },
    url: { args: [], returnType: ["string"] },
    domainName: { args: [], returnType: ["string"] },
    domainSuffix: { args: [], returnType: ["string"] },
    domainWord: { args: [], returnType: ["string"] },
    ip: { args: [], returnType: ["string"] },
    ipv6: { args: [], returnType: ["string"] },
    port: { args: [], returnType: ["number"] },
    userAgent: { args: [], returnType: ["any"] },
    color: {
      args: [
        { optional: true, type: "number", name: "baseRed255" },
        { optional: true, type: "number", name: "baseGreen255" },
        { optional: true, type: "number", name: "baseBlue255" },
      ],
      returnType: ["string"],
    },
    mac: {
      args: [{ optional: true, type: "string", name: "sep" }],
      returnType: ["string"],
    },
    password: {
      args: [
        { optional: true, type: "number", name: "len" },
        { optional: true, type: "boolean", name: "memorable" },
        { optional: true, type: "string", name: "prefix" },
      ],
      returnType: ["string"],
    },
  },
  finance: {
    account: {
      args: [{ optional: true, type: "number", name: "length" }],
      returnType: ["string"],
    },
    accountName: { args: [], returnType: ["string"] },
    routingNumber: { args: [], returnType: ["string"] },
    mask: {
      args: [
        { optional: true, type: "number", name: "length" },
        { optional: true, type: "boolean", name: "parens" },
        { optional: true, type: "boolean", name: "ellipsis" },
      ],
      returnType: ["string"],
    },
    amount: {
      args: [
        { optional: true, type: "number", name: "min" },
        { optional: true, type: "number", name: "max" },
        { optional: true, type: "number", name: "dec" },
        { optional: true, type: "string", name: "symbol" },
        { optional: true, type: "boolean", name: "autoFormat" },
      ],
      returnType: ["string"],
    },
    transactionType: { args: [], returnType: ["string"] },
    currencyCode: { args: [], returnType: ["any"] },
    currencyName: { args: [], returnType: ["any"] },
    currencySymbol: { args: [], returnType: ["any"] },
    bitcoinAddress: { args: [], returnType: ["string"] },
    litecoinAddress: { args: [], returnType: ["string"] },
    creditCardNumber: {
      args: [{ optional: true, type: "string", name: "provider" }],
      returnType: ["string"],
    },
    creditCardCVV: { args: [], returnType: ["string"] },
    ethereumAddress: { args: [], returnType: ["string"] },
    iban: {
      args: [
        { optional: false, type: "boolean", name: "formatted" },
        { optional: false, type: "string", name: "countryCode" },
      ],
      returnType: ["string"],
    },
    bic: { args: [], returnType: ["string"] },
    transactionDescription: { args: [], returnType: ["string"] },
  },
  image: {
    image: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    avatar: { args: [], returnType: ["string"] },
    imageUrl: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "string", name: "category" },
        { optional: true, type: "boolean", name: "randomize" },
        { optional: true, type: "boolean", name: "https" },
      ],
      returnType: ["string"],
    },
    abstract: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    animals: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    business: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    cats: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    city: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    food: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    nightlife: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    fashion: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    people: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    nature: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    sports: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    technics: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    transport: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "boolean", name: "randomize" },
      ],
      returnType: ["string"],
    },
    dataUri: {
      args: [
        { optional: true, type: "number", name: "width" },
        { optional: true, type: "number", name: "height" },
        { optional: true, type: "string", name: "color" },
      ],
      returnType: ["string"],
    },
  },
  git: {
    branch: { args: [], returnType: ["string"] },
    commitMessage: { args: [], returnType: ["string"] },
    commitSha: { args: [], returnType: ["string"] },
    shortSha: { args: [], returnType: ["string"] },
  },
  system: {
    fileName: { args: [], returnType: ["string"] },
    commonFileName: {
      args: [{ optional: false, type: "string", name: "ext" }],
      returnType: ["string"],
    },
    mimeType: { args: [], returnType: ["string"] },
    commonFileType: { args: [], returnType: ["string"] },
    commonFileExt: { args: [], returnType: ["string"] },
    fileType: { args: [], returnType: ["string"] },
    fileExt: {
      args: [{ optional: true, type: "string", name: "mimeType" }],
      returnType: ["string"],
    },
    directoryPath: { args: [], returnType: ["string"] },
    filePath: { args: [], returnType: ["string"] },
    semver: { args: [], returnType: ["string"] },
  },
};
const cleanedData: any = {};
const cleanData = () => {
  Object.keys(data).forEach((categ) => {
    const allowedApis = Object.keys(data[categ]).filter((api) => {
      const val = data[categ][api];
      return val.args.length === 0 && val.args.map(({ optional }) => optional);
    });
    if (allowedApis.length > 0) cleanedData[categ] = allowedApis;
  });
};
cleanData();
// const cleanedData = cleanData(data);
export default cleanedData;
export const getApis = (category: any) => {
  return cleanedData[category];
};
