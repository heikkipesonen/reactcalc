import * as React from "react";
import FormattedMeasurement from "./FormattedMeasurement";
import { shallow } from "enzyme";

describe("FormattedMeasurement", () => {
  it("should format some measurements", () => {
    const el = shallow(<FormattedMeasurement unit="kg" value={100} />);
    expect(el.find("text").text()).toEqual("100.00kg");
  });

  it("should round to 2 decimals by default", () => {
    const el = shallow(<FormattedMeasurement unit="kg" value={100.0100009} />);
    expect(el.find("text").text()).toEqual("100.01kg");
  });

  it("should round to given amount of decimals", () => {
    const el = shallow(
      <FormattedMeasurement decimals={4} unit="kg" value={100.0101009} />
    );
    expect(el.find("text").text()).toEqual("100.0101kg");
  });

  it("should change separator if given", () => {
    const el = shallow(
      <FormattedMeasurement
        decimals={4}
        separator=","
        unit="kg"
        value={100.0101009}
      />
    );
    expect(el.find("text").text()).toEqual("100,0101kg");
  });
});
