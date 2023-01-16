import { useEffect } from 'react';

export default function First() {
  useEffect(() => {
    const lastName: string = 'Lee';
    console.log(`lastName:${lastName}`);

    const arr: string[] = ['kim', 'lee'];
    console.log(`arr:${arr}`);

    const num: string | number = 2;
    console.log(`num:${num}`);

    type literalType = 'cat' | 'dog';
    const catOrDog: literalType = 'cat';
    console.log(catOrDog);

    function func(x: number): number {
      return x * 2;
    }

    //에러
    function func2(x: number | string) {
      // return x * 2;
    }

    //가능
    function func3(x: number | string) {
      if (typeof x === 'number') {
        return x * 2;
      }
    }
  }, []);

  return (
    <>
      <div>TS First Step</div>
    </>
  );
}
