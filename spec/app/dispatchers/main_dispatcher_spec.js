require('../spec_helper');

describe('MainDispatcher', () => {
  let subject, Cursor, cursorSpy;

  beforeEach(() => {
    Cursor = require('pui-cursor');
    cursorSpy = jasmine.createSpy('callback');
    subject = Dispatcher;

    //dispatch is spied on in spec_helper
    subject.dispatch.and.callThrough();

    //prevent console logs
    spyOn(subject, 'onDispatch');
  });
});
