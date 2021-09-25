export interface Per {
  getPaddingString(): string;
}

export class SpaceRepeatingPer implements Per {
  num?: number;
  str: string = '134';
  all: number = this.num! + Number(this.str);
  constructor(private numSpaces: number) { }
  getPaddingString() {
    // return Array(this.numSpaces + 1).join(" ");
    return this.str;
  }
}

export class StringPer implements Per {
  constructor(private value: string) { }
  getPaddingString() {
    return this.value;
  }
}

const f1 = (r: Function) => r()
const f2 = (r: () => number) => r()