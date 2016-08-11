require('./spec_helper');

describeWithWebdriver('Features', () => {
  let page;

  describe('when viewing the app', () => {
    beforeEach(async (done) => {
      page = (await visit('/')).page;
      await waitForExist(page, '.pui-react-starter');
      done();
    });
  });
});
