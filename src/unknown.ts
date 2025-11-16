// Unknown type example

const discountedCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const [discountPrice] = input.split(" ");
    console.log(Number(discountPrice) * 0.1);
  } else {
    console.log("wrong input");
  }
};

discountedCalculator(100);
discountedCalculator("100 tk");
discountedCalculator(null);

// void

const throwError = (mssg: string): never => {
  throw new Error(mssg);
};

throwError("Error...");
