import { addEventListener } from "./listener";

describe("listener", () => {
  it("should attach a listener to an element, and provide unsubscribe functionality as return value", () => {
    const el = document.createElement("div");
    const callback = jest.fn();

    const unbind = addEventListener(el, "click", callback);

    expect(typeof unbind).toEqual("function");
    const event = new Event("click");

    el.dispatchEvent(event);
    expect(callback).toHaveBeenCalledWith(event);
  });

  it("should remove listener when return value function is called", () => {
    const listenerUnbind = addEventListener(window, jest.fn());
    const unbind = jest.fn();
    window.removeEventListener = unbind;

    listenerUnbind();

    expect(unbind).toHaveBeenCalledTimes(1);
  });
});
