// Union Type

type userRole = "admin" | "user" | "guest";

const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "user Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

console.log(getDashboard("user"));

// Intersection

type Employee = {
  id: number;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const NayefShaheb: EmployeeManager = {
  id: 101,
  name: "ismail Nayef",
  phoneNo: "01711958378",
  designation: "manager",
  teamSize: 20,
};
