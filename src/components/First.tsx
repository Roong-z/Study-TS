import { useEffect } from 'react';
import { text } from 'stream/consumers';

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
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="text-[19px] bg-[#4267B2] shadow-sm bg-white rounded-lg">
          shadow-sm
        </div>
        <div className="shadow bg-white rounded-lg">shadow</div>
        <div className="shadow-md bg-white rounded-lg">shadow-md</div>
        <div className="shadow-lg bg-white rounded-lg">shadow-lg</div>
        <div className="shadow-xl bg-white rounded-lg">shadow-xl</div>
        <div className="shadow-2xl bg-white rounded-lg">shadow-2xl</div>
      </div>
    </>
  );
}
