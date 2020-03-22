// Models of what each main variable should look like (keeps the typeScripting in one file for these variables)
export class Choice {
  constructor(public value: string, public correct?: boolean) {}
}

export class Question {
  constructor(public label: string, public choices: Choice[]) {}
}

export class Quiz {
  constructor(public label: string, public name: string, public description: string, public fileName: string) {}
}

export class Answers {
  constructor(public values: Choice[] = []) {}
}
