// Keyof: type operator

type Vehicles = {
  car: string;
  bike: string;
  cng: string;
};

type myVehicle1 = "car" | "bike" | "cng";
type myVehicle2 = keyof Vehicles;

const myVehicles1: myVehicle1 = "bike";
const myVehicles2: myVehicle2 = "bike";

// Keyof with constraint

const user = {
  id: 222,
  name: "ismail",
  address: {
    city: "bhandaria",
  },
};

const myId1 = user.id;
const myId2 = user["id"];
