import { controllerResponse, ResponseStatus } from '../../../src/rest';

interface SampleRawData {
  data: string;
}

describe('rest/utils', () => {
  describe('controllerResponse', () => {
    it('Should append a status key-value pair in the promise result', (done) => {
      const rawData: SampleRawData = {
        data: '123',
      };
      const rawPromise = new Promise<SampleRawData>((resolve) =>
        resolve(rawData)
      );
      const newPromise = controllerResponse<SampleRawData>(rawPromise);

      newPromise.then((result) => {
        expect(result).toStrictEqual({
          status: ResponseStatus.SUCCESS,
          result: rawData,
        });
        done();
      });
    });
  });
});
