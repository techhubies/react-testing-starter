import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should nothing when the imageUrls array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("should render a list of images", () => {
    const imageAUrl = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imageAUrl} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imageAUrl.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
