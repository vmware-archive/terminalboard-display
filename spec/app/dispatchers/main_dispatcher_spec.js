require('../spec_helper');

// Don't ask
const numResolvingPromiseTicks = 4;

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

  describe('pipelinesFetch', () => {
    beforeEach(() => {
      subject.$store = new Cursor({pipelines: []}, cursorSpy);
      subject.dispatch({type: 'pipelinesFetch', data: {backendURL: 'https://example.com'}});
    });

    it('calls getPipelines with the backend URL, and sets it in the store', () => {
      expect('https://example.com/api/pipeline_statuses').toHaveBeenRequested();
    });

    it('sets the pipeline data in the store', () => {
      const request = jasmine.Ajax.requests.mostRecent();
      request.succeed('foo');
      MockPromises.tick(numResolvingPromiseTicks);
      expect(cursorSpy).toHaveBeenCalledWith({pipelines: 'foo'})
    })
  });

  describe('pipelinesUpdatePeriodically', () => {
    let interval = 5;

    beforeEach(() => {
      subject.dispatch({type: 'pipelinesUpdatePeriodically', data: {backendURL: 'https://example.com', interval: interval}});
    });

    it('calls window.setInterval', () => {
      expect('pipelinesFetch').not.toHaveBeenDispatched();

      jasmine.clock().tick(interval + 1);
      expect('pipelinesFetch').toHaveBeenDispatched(1);
      expect('pipelinesFetch').toHaveBeenDispatchedWith({data: {backendURL: 'https://example.com', interval: interval}});

      jasmine.clock().tick(interval + 1);
      expect('pipelinesFetch').toHaveBeenDispatched(2);
      expect('pipelinesFetch').toHaveBeenDispatchedWith({data: {backendURL: 'https://example.com', interval: interval}});
    })
  })
});
