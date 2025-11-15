// object => function => method

const poorUser = {
  name: "ismail",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    this.balance = totalBalance;
    return totalBalance;
  },
};

poorUser.addBalance(2500);

console.log(poorUser.balance);
