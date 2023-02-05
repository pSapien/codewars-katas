class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(activityRank) {
    if (activityRank < -8 || activityRank === 0 || activityRank > 8) throw Error();

    let originalRank = this.rank;
    this.progress += calcProgress(this.rank, activityRank);

    if (this.progress >= 100) {
      const rankChange = Math.floor(this.progress / 100);

      this.progress = this.progress - rankChange * 100;
      this.rank += rankChange;

      if (originalRank < 0 && this.rank >= 0) this.rank++;

      this.rank = Math.min(this.rank, 8);
    }

    if (this.rank === 8) this.progress = 0;
    return this.rank;
  }
}

function calcProgress(currentRank, activityRank) {
  if (currentRank === 8) return 0;

  const rankOrders = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  const currentRankOrder = rankOrders.indexOf(currentRank);
  const activityRankOrder = rankOrders.indexOf(activityRank);
  const currentMinusActivityDiff = currentRankOrder - activityRankOrder;

  /**  Completing an activity that is ranked the same as that of the user's will be worth 3 points */
  if (currentMinusActivityDiff === 0) return 3;

  /** Completing an activity that is ranked one ranking lower than the user's will be worth 1 point */
  if (currentRankOrder > activityRankOrder && currentMinusActivityDiff === 1) return 1;

  /** Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored */
  if (currentRankOrder > activityRankOrder && currentMinusActivityDiff >= 2) return 0;

  const activityMinusCurrentDiff = activityRankOrder - currentRankOrder;
  return 10 * activityMinusCurrentDiff * activityMinusCurrentDiff;
}

const user = new User();
user.rank = 7;
user.progress = 91;
console.log(user.incProgress(8));
console.log(user.rank, user.progress);
