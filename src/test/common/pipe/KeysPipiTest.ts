import { } from 'jasmine';
import { KeysPipe } from 'app/appmodule/common/pipe/KeysPipe';
import { cars } from 'app/appmodule/core/car/CarModels';

describe('KeysPipe ', () => {

  it('conver  arry to key and value object ', () => {
    const pipe: KeysPipe = new KeysPipe();
    const arr: any = pipe.transform(cars);
    expect(arr.length).toBe(2);
    expect(arr[0].key).toBe('bmx');
    expect(arr[1].key).toBe('cadillac');
  });
});
