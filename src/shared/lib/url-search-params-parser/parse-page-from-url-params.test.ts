import {describe, expect, it, vi} from "vitest";
import {URLSearchParamsParser} from "./url-search-params-parser";
import {Container} from "inversify";

describe("parse page from url params", () => {
    let mockUrlSearchParams: URLSearchParams

    const container = new Container();
    container.bind(URLSearchParamsParser).toSelf().inSingletonScope();
    const {parsePage} = container.get(URLSearchParamsParser)

    function createMockUrlSearchParams(returnValue: string | null): URLSearchParams {
        const mockUrlSearchParams: Partial<URLSearchParams> = {
            get: vi.fn().mockReturnValue(returnValue)
        }
        return mockUrlSearchParams as URLSearchParams
    }

    it("should parse page from url params", () => {
        mockUrlSearchParams = createMockUrlSearchParams("10");
        const page = parsePage(mockUrlSearchParams)
        expect(page).toEqual(10);
    })
    it("should return 1 when url params is null", () => {
        mockUrlSearchParams = createMockUrlSearchParams(null);
        const page = parsePage(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
    it("should return 1 when url params is empty string", () => {
        mockUrlSearchParams = createMockUrlSearchParams("");
        const page = parsePage(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
    it("should return 1 when url params page isn't integer", () => {
        mockUrlSearchParams = createMockUrlSearchParams("1.3");
        const page = parsePage(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
    it("should return 1 when url params page is negative", () => {
        mockUrlSearchParams = createMockUrlSearchParams("-9");
        const page = parsePage(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
    it("should return 1 when url params page is not number", () => {
        mockUrlSearchParams = createMockUrlSearchParams("not number");
        const page = parsePage(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
})