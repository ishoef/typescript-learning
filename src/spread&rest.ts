// Spread Operator for array

const friends = ["Rahim", "karim", "Tanvir"];

const schoolFriends = ["rabbi", "mamaun", "ahmad", "jafor"];

const collgeFriends = ["yousuf", "jayed", "showkot", "rafi"];

friends.push(...schoolFriends, ...collgeFriends);
console.log(`Your total friends is ${friends.length}`);

// Spread Operator for object

const user = {
  name: "ismail",
  phoneNumber: "01715145320",
};

const otherInfo = {
  hobby: "writing",
  color: "navy blue",
};

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

// Rest Operator

const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend) => {
    console.log(`Send Invitation to ${friend}`);
  });
};

sendInvitation("mintu", "pintu", "lintu", "sontu", "nannu");

const student: {
  id: string;
  name: string;
  gender: string;
  isSubscription: boolean;
  role: string;
  age: number;
  country: string;
  liveIn: string;
} = {
  id: "ST101",
  name: "Ismail Nayef",
  gender: "male",
  isSubscription: true,
  role: "student",
  age: 23,
  country: "Bangladesh",
  liveIn: "Egypt",
};
