/* eslint-disable */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import albums from './albums.js';
// import * as actions from './modules';
import { fetchAlbums, loadAlbums, LOAD_ALBUMS } from './albums';
import nock from 'nock';
import expect from 'expect'; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should fetch albums', () => {

    const albums = ['Harlem Street Singer']

    nock('http://localhost:3000/')
      .get('/albums')
      .reply(200, { payload: { albums } });

    

    const expectedActions = [
      { type: LOAD_ALBUMS, meta: { remote: true }, payload: { albums } },
    ];
    const store = mockStore({ albums: [] });
    fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(albums)
    }))

    return store.dispatch(fetchAlbums())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
