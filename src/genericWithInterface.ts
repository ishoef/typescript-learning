interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };

  smartWatch: T;
  bike?: X;             // Optional type
}

const poorDeveloper: Developer<{
  heartRate: string;
  stopWatch: boolean;
}> = {
  name: "Ismail Nayef",
  salary: 5000,
  device: {
    brand: "Lenovo",
    model: "A21",
    releasedYear: "2010",
  },

  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
};

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Ismail Nayef",
  salary: 500000,
  device: {
    brand: "MacBook",
    model: "Air",
    releasedYear: "2020",
  },

  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: false,
    aiFeature: false,
  },
};
