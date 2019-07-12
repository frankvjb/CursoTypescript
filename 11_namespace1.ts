namespace MySpace {
  let a = 2
  export class MyClass {
      public static myProperty: number = 12
  }
}

namespace OtroSpace {
  export let a = 23
}

console.log(MySpace.MyClass.myProperty)
console.log(OtroSpace.a)

