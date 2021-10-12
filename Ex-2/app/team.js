export default class CreateTeam {
    constructor() {
        this.teamName = "Sinister Six";
        this.trainer = "Spider-Man";
        this.roster = [];
    }

    describe() {
        return `Team ${this.teamName} with trainer ${this.trainer} has the following Pokemon ${this.roster}`
    }
}
