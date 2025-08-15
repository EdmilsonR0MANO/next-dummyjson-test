import { renderHook, act } from "@testing-library/react";
import { useProductFilters } from "../useProductFilters";

describe("useProductFilters", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useProductFilters());

    expect(result.current.filters).toEqual({
      page: 1,
      search: "",
      category: "",
      sortBy: "title",
      order: "asc",
      itemsPerPage: 10,
    });
  });

  it("should update search and reset page", () => {
    const { result } = renderHook(() => useProductFilters());

    act(() => {
      result.current.setSearch("test");
    });

    expect(result.current.filters.search).toBe("test");
    expect(result.current.filters.page).toBe(1);
  });

  it("should update category and reset page", () => {
    const { result } = renderHook(() => useProductFilters());

    act(() => {
      result.current.setCategory("smartphones");
    });

    expect(result.current.filters.category).toBe("smartphones");
    expect(result.current.filters.page).toBe(1);
  });

  it("should update sort and reset page", () => {
    const { result } = renderHook(() => useProductFilters());

    act(() => {
      result.current.setSort("price");
    });

    expect(result.current.filters.sortBy).toBe("price");
    expect(result.current.filters.order).toBe("asc");
    expect(result.current.filters.page).toBe(1);
  });

  it("should toggle order when sorting same field", () => {
    const { result } = renderHook(() => useProductFilters());

    act(() => {
      result.current.setSort("price");
    });

    act(() => {
      result.current.setSort("price");
    });

    expect(result.current.filters.sortBy).toBe("price");
    expect(result.current.filters.order).toBe("desc");
  });

  it("should update page without resetting other filters", () => {
    const { result } = renderHook(() => useProductFilters());

    act(() => {
      result.current.setSearch("test");
      result.current.setPage(3);
    });

    expect(result.current.filters.search).toBe("test");
    expect(result.current.filters.page).toBe(3);
  });

  it("should update items per page and reset to page 1", () => {
    const { result } = renderHook(() => useProductFilters());

    act(() => {
      result.current.setPage(3);
      result.current.setItemsPerPage(20);
    });

    expect(result.current.filters.itemsPerPage).toBe(20);
    expect(result.current.filters.page).toBe(1);
  });
}); 