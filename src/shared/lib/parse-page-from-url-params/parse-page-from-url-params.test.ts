import {describe, expect, it, vi} from "vitest";
import {parsePageFromUrlParams} from "./parse-page-from-url-params.ts";

describe("parse page from url params", () => {
    let mockUrlSearchParams: URLSearchParams

    function createMockUrlSearchParams(returnValue: string | null): URLSearchParams
    {
        const mockUrlSearchParams: Partial<URLSearchParams> = {
            get: vi.fn().mockReturnValue(returnValue)
        }
        return mockUrlSearchParams as URLSearchParams
    }

    it("should parse page from url params", () => {
        mockUrlSearchParams = createMockUrlSearchParams("10");
        const page = parsePageFromUrlParams(mockUrlSearchParams)
        expect(page).toEqual(10);
    })
    it("should return 1 when url params is null", () => {
        mockUrlSearchParams = createMockUrlSearchParams(null);
        const page = parsePageFromUrlParams(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
    it("should return 1 when url params is empty string", () => {
        mockUrlSearchParams = createMockUrlSearchParams("");
        const page = parsePageFromUrlParams(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
    it("should return 1 when url params page isn't integer", () => {
        mockUrlSearchParams = createMockUrlSearchParams("1.3");
        const page = parsePageFromUrlParams(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
    it("should return 1 when url params page is negative", () => {
        mockUrlSearchParams = createMockUrlSearchParams("-9");
        const page = parsePageFromUrlParams(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
    it("should return 1 when url params page is not number", () => {
        mockUrlSearchParams = createMockUrlSearchParams("not number");
        const page = parsePageFromUrlParams(mockUrlSearchParams)
        expect(page).toEqual(1);
    })
})