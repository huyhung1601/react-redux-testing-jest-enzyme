import moxios from "moxios";
import { testStore } from "../../Utils/index";
import { fetchPosts } from "./../redux/reducers/actions/index";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "title 1",
        desc: "desc1",
      },
      {
        title: "title 2",
        desc: "desc2",
      },
      {
        title: "title 3",
        desc: "desc3",
      },
    ];
    const store= testStore();
    moxios.wait(()=>{
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: expectedState
        })
    });

    return store.dispatch(fetchPosts()).then(()=>{
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState)
    })
  });
});
